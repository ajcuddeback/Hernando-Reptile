const path = require('path');
const router = require('express').Router();
const withAuth = require('../../utils/withAuth')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/adoptables', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/adoptables.html'));
});
router.get('/birds', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/birds-adopt.html'));
});
router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/contact.html'));
});
router.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/donation.html'));
});
router.get('/mammals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/mammals-adopt.html'));
});
router.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/meet-the-team.html'));
});
router.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/payment.html'));
});
router.get('/pit-microchipping-1', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/PIT-micro.html'));
});
router.get('/reptiles', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/reptile-adopt.html'));
});
router.get('/volunteer', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/volunteer.html'));
});
router.get('/admin', withAuth,  (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/admin.html'))
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sub-pages/signin.html'))
});
module.exports = router;