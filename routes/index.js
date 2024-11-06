var express = require('express');
var router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About Me page route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// Projects page route
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

// Contact Me page route
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
