const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
	axios({
		method: 'GET',
		url: `https://api.edamam.com/search?q=${req.body}&app_id=871e1970&app_key=${process.env.edamam_key}`
	})
		.then((response) => {
			console.log(response);
			//res.send(response.data)
		})
		.catch((error) => {
			console.log(`*****THIS IS THE ERROR: ${error}*****`);
			res.sendStatus(500)
		})
})

module.exports = router;