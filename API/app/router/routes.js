const { Router } = require('express');
const authorizationMiddleware = require('../middlewares/jwt');
const userController = require('../controller/user');
const articlesController = require('../controller/articles');

const router = Router();

/**
 * POST /user/signup
 * Route for user registration. 
 * Accepts email and password, validates them, and creates a new user record.
 * @param {express.Request} req - The request object, containing email and password in the body.
 * @param {express.Response} res - The response object.
 */
router.post("/user/signin", userController.signUp);

/**
 * POST /user/login
 * Route for user login
 * Accepts email ad password, creates a new session.
 * @param {express.Request} req - The request object, containing email and password in the body.
 * @param {express.Response} res - The response object.
 */
router.post("/user/login", userController.login);

/**
 * GET /articles
 * Route for retrieving articles from builder.io
 * Accepts valid session token in local storage or headers.
 * @param {express.Request} req - The request object, containing valid user session token.
 * @param {express.Response} res - The response object, the articles.
 */
router.get("/articles", authorizationMiddleware, articlesController.getArticles);

module.exports = router;