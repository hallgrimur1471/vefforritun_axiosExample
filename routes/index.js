const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
	concerts()
    .then((result) => {
      console.log(result);
    	res.render('index', { title: 'Tónleikar', concerts: result.data.results });
    })
    .catch((error) => {
      console.log(error);
      res.render('error', { title: 'Oh no!', error });      
    });
});

router.get('/event/:namez', function(req, res, next) {
  console.log(req.params);
  concerts()
    .then((result) => {
      console.log(result);
      res.render('index', { title: 'Tónleikar', concerts: result.data.results });
    })
    .catch((error) => {
      console.log(error);
      res.render('error', { title: 'Oh no!', error });      
    });
});

function concerts() {
	const instance = axios.create({ baseURL: 'https://apis.is' });
  return instance.get('/concerts');
}

module.exports = router;
