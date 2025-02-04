from flask import Flask, request, jsonify
import wikipedia
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/search', methods=['GET'])
def search():
    """
    Endpoint for searching for definition.
    Parameter: ?term=<definition>
    """
    term = request.args.get('term', '')
    if not term:
        return jsonify({'error': 'You need to pass "term" parameter.'}), 400

    # Perform Wikipedia search
    search_results = wikipedia.search(term)
    if not search_results:
        return jsonify({'error': f'No results found for "{term}".'}), 404

    # Get the full content of the first result
    try:
        page = wikipedia.page(search_results[0])
        content = page.content
    except wikipedia.exceptions.DisambiguationError as e:
        return jsonify({'error': f'Ambiguous term "{term}". Possible options: {e.options}'}), 400
    except wikipedia.exceptions.PageError:
        return jsonify({'error': f'Page "{term}" does not exist in Wikipedia.'}), 404

    return jsonify({
        'title': page.title,
        'content': content
    })

@app.route('/related', methods=['GET'])
def related():
    """
    Endpoint for fetching related links.
    Parameter: ?term=<term>
    """
    term = request.args.get('term', '')
    if not term:
        return jsonify({'error': 'You need to pass "term" parameter.'}), 400

    # Perform Wikipedia search
    search_results = wikipedia.search(term)
    if not search_results:
        return jsonify({'error': f'No results found for "{term}".'}), 404

    # Get the page links of the first result
    try:
        page = wikipedia.page(search_results[0])
    except wikipedia.exceptions.DisambiguationError as e:
        return jsonify({'error': f'Ambiguous term "{term}". Possible options: {e.options}'}), 400
    except wikipedia.exceptions.PageError:
        return jsonify({'error': f'Page "{term}" does not exist in Wikipedia.'}), 404

    links = page.links
    return jsonify({'title': page.title, 'links': links})

@app.route('/random', methods=['GET'])
def random_content():
    """
    Endpoint for fetching a random Wikipedia page content.
    """
    random_title = wikipedia.random(pages=1)
    try:
        page = wikipedia.page(random_title)
        content = page.content
    except wikipedia.exceptions.DisambiguationError as e:
        return jsonify({'error': f'Ambiguous term "{random_title}". Possible options: {e.options}'}), 400
    except wikipedia.exceptions.PageError:
        return jsonify({'error': f'Page "{random_title}" does not exist in Wikipedia.'}), 404

    return jsonify({
        'title': random_title,
        'content': content
    })

if __name__ == '__main__':
    app.run(debug=True)