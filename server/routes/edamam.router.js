const express = require('express');
const router = express.Router();
const axios = require('axios');

function transformData(obj) {
	console.log(obj)
	let transformedObj = []
	for (let r of obj) {
		let newObj = {
			title: r.recipe.label,
			image: r.recipe.image,
			url: r.recipe.url
		}
		transformedObj.push(newObj)
	}
	return transformedObj
}

router.get('/:search', (req, res) => {
	axios({
		method: 'GET',
		url: `https://api.edamam.com/search?q=${req.params.search}&to=6&app_id=${process.env.edamam_appid}&app_key=${process.env.edamam_key}`	
	})
	.then((response) => {
		let transformedObj = transformData(response.data.hits)
		res.send(transformedObj)
	})
	.catch((error) => {
		console.log(`*****THIS IS THE ERROR: ${error}*****`);
		res.sendStatus(500)
	})
})

module.exports = router;