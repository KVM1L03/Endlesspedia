from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import random
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

logging.basicConfig(level=logging.DEBUG)

# Wikipedia API base URL
WIKI_API_URL = "https://{lang}.wikipedia.org/w/api.php"

def mediawiki_api_request(params, lang='en'):
    """
    Sends a request to the MediaWiki API and returns the response as JSON.
    """
    headers = {'User-Agent': 'Endlesspedia/1.0 (contact@example.com)'}
    params['format'] = 'json'  # Ensure the response is in JSON format
    params['redirects'] = 1  # Automatically handle redirects

    response = requests.get(WIKI_API_URL.format(lang=lang), params=params, headers=headers)
    return response.json()

@app.route('/search', methods=['GET'])
def search():
    """
    Endpoint for searching a Wikipedia definition.
    Parameters: ?term=<search_term>&lang=<language>
    """
    term = request.args.get('term', '')
    lang = request.args.get('lang', 'en')  # Default language is English

    if not term:
        return jsonify({'error': 'You must provide a "term" parameter.'}), 400

    # Search for the term in Wikipedia
    search_results = mediawiki_api_request({
        'action': 'query',
        'list': 'search',
        'srsearch': term,
    }, lang)

    # Check if any results were found
    if 'query' not in search_results or not search_results['query']['search']:
        return jsonify({'error': f'No results found for "{term}".'}), 404

    # Get the title of the first search result
    title = search_results['query']['search'][0]['title']

    # Retrieve the full content of the page
    content_data = mediawiki_api_request({
        'action': 'query',
        'prop': 'extracts',
        'explaintext': True,  # Get plain text without HTML formatting
        'titles': title
    }, lang)

    # Extract the page content
    pages = content_data.get('query', {}).get('pages', {})
    page_content = next(iter(pages.values()), {}).get('extract', '')

    return jsonify({'title': title, 'content': page_content})

@app.route('/related', methods=['GET'])
def related():
    """
    Endpoint for fetching related links from a Wikipedia page.
    Parameters: ?term=<page_title>&lang=<language>
    """
    term = request.args.get('term', '')
    lang = request.args.get('lang', 'en')

    if not term:
        return jsonify({'error': 'You must provide a "term" parameter.'}), 400

    # Fetch related links from the Wikipedia page
    page_data = mediawiki_api_request({
        'action': 'query',
        'prop': 'links',
        'titles': term,
        'pllimit': 'max'  # Fetch as many links as possible
    }, lang)

    # Extract links from the response
    pages = page_data.get('query', {}).get('pages', {})
    links = [link['title'] for page in pages.values() for link in page.get('links', [])]


    return jsonify({'title': term, 'links': links})

@app.route('/random', methods=['GET'])
def random_content():
    """
    Endpoint for fetching a random Wikipedia page.
    Parameters: ?lang=<language>
    """
    lang = request.args.get('lang', 'en')

    # Retrieve a random Wikipedia page
    random_data = mediawiki_api_request({
        'action': 'query',
        'list': 'random',
        'rnlimit': 1,
        'rnnamespace': 0  # Limit to main article namespace
    }, lang)

    # Extract the title of the random page
    random_title = random_data.get('query', {}).get('random', [{}])[0].get('title', '')

    if not random_title:
        return jsonify({'error': 'Failed to retrieve a random Wikipedia page.'}), 500

    # Retrieve the content of the random page
    content_data = mediawiki_api_request({
        'action': 'query',
        'prop': 'extracts',
        'explaintext': True,
        'titles': random_title
    }, lang)

    # Extract the page content
    pages = content_data.get('query', {}).get('pages', {})
    page_content = next(iter(pages.values()), {}).get('extract', '')

    return jsonify({'title': random_title, 'content': page_content})

if __name__ == '__main__':
    app.run(debug=True)
