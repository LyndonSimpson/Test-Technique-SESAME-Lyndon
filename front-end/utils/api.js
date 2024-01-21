async function signupUser(credentials) {
    return fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

async function loginUser(credentials) {
    return fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

/**
 * Sets the authorization header for active sessions
 * 
 * @param {*} url 
 * @param {*} method GET
 * @param {*} body 
 * @returns 
 */
async function fetchWithToken(url, method = 'GET', body = null) {
    const token = localStorage.getItem('token');
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
        method: method,
        headers: headers,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(url, config);
    const data = await response.json();
    return data;
}

async function fetchArticles() {
    const articlesUrl = 'http://localhost:3000/articles';

    //fetch articles with authorization
    return fetchWithToken(articlesUrl);
}

export { signupUser, loginUser, fetchArticles, fetchWithToken };