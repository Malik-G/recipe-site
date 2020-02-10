const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
	console.log(`https://services.campbells.com/api/Recipes/recipe/search?q=${req.body}
				&limit=2&api-key=${process.env.campbells_key}`)
	axios({
		method: 'GET',
		url: `https://services.campbells.com/api/Recipes/recipe/search?q=${req.body}
				&limit=2&api-key=${process.env.campbells_key}`
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
