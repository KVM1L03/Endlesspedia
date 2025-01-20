from flask import Flask, request, jsonify
import wikipedia
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

    links = page.links[:10]  # Limit to 10 related terms
    return jsonify({'title': page.title, 'related_terms': links})

if __name__ == '__main__':
    app.run(debug=True)