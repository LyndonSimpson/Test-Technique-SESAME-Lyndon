const fetch = require('node-fetch');

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

module.exports = { getArticles };