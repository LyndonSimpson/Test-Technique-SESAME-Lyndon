const fetch = require('node-fetch');

/**
 * Retrieves a list of articles from Builder.io
 * It sends a request to the Builder.io API and returns the articles if successful.
 * In case of an error with the API request, it sends an appropriate error message.
 * 
 * @param {express.Request} req 
 * @param {express.Response} res - The response object. Used to return the articles or error messages.
 */
const getArticles = async (req, res) => {
    try {
        const builderIoUrl = 'https://cdn.builder.io/api/v3/content/articles?apiKey=6e139f4f71454a88b3f01ee85b1a35b5';

        const response = await fetch(builderIoUrl);

        if (response.status === 200) {
            const data = await response.json();
            const articles = data.results[0].data.articles;

            res.json({
                articles: articles
            });
        } else {
            res.status(response.status).send('Error fetching articles');
        }
    } catch (error) {
        console.error('Error in getArticles controller:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getArticles
};