const express = require('express');
const router = express.Router();
const axios = require('axios');

function checkForImage(imgSource) {
	if (imgSource === '' || imgSource === undefined || imgSource === null || imgSource.substring(0, 4) !== 'http') {
		return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`
	}
	else return imgSource
}

function getIngredients(obj) {
	let ingredientArray = []
	for (let item of obj) {
		if (item.text === null || item.text === undefined) {
			continue
		}
		else {
			ingredientArray.push(item.text)
		}
	}
	return ingredientArray
}

function transformData(obj) {
	let transformedObj = []
	for (let r of obj) {
		let newObj = {
			title: r.recipe.label,
			image: checkForImage(r.recipe.image),
			url: r.recipe.url,
			ingredients: getIngredients(r.recipe.ingredients)
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