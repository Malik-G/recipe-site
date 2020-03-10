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
		if (item.ExternalProduct === null || item.ExternalProduct === undefined) {
			continue
		}
		else {
			ingredientArray.push(item.ExternalProduct.Name)
		}
	}
	return ingredientArray
}

function transformData(obj) {
	let transformedObj = []
	for (let recipe of obj) {
		let newObj = {
			title: recipe.Name,
			image: checkForImage(recipe.RecipeMetaRecords[3].Value),
			url: `https://www.campbells.com/kitchen/recipes/${recipe.Name.replace(/ /g, "-")}`,
			ingredients: getIngredients(recipe.Ingredients)
		}
		transformedObj.push(newObj)
	}
	return transformedObj
}

router.get('/:search', (req, res) => {
	axios({
		method: 'GET',
		url: `https://services.campbells.com/api/Recipes/recipe/search?q=${req.params.search}&limit=6&api-key=${process.env.campbells_key}`
	})
		.then((response) => {
			let transformedObj = transformData(response.data.Result)
			res.send(transformedObj)
		})
		.catch((error) => {
			console.log(`\n*****\nTHIS IS THE ERROR: ${error}\n*****\n`);
			res.sendStatus(500)
		})
})

module.exports = router;
