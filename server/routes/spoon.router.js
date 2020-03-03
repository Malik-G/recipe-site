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
		if (item.name === null) {
			continue
		}
		else {
			ingredientArray.push(item.name)
		}
	}
	return ingredientArray
}

//this obj is not iterable, but obj.results is an array
function getRecipeIDs(obj){
	let idArray = []
	for (let recipe of obj.results) {
		let recipeId = recipe.id
		idArray.push(recipeId)
	}
	let idString = idArray.toString()
	return idString
}

function transformData(obj) {
	let transformedObj = []
	for (let recipe of obj) {
		let newObj = {
			title: recipe.title,
			image: checkForImage(recipe.image),
			url: recipe.sourceUrl,
			ingredients: getIngredients(recipe.extendedIngredients)
		}
		transformedObj.push(newObj)
	}
	return transformedObj
}

router.get('/:search', (req, res) => {
	//First axios call to Spoonacular API to get recipe IDs based on the user's search query
	axios({
		method: 'GET',
		url: `https://api.spoonacular.com/recipes/search?query=${req.params.search}&number=2&apiKey=${process.env.spoon_key}`
	})
	.then((response) => {
		let idString = getRecipeIDs(response.data)
		
		//Second axios call to Spoonacular API to get the recipe details based on the string of recipe IDs
		axios({
			method: 'GET',
			url: `https://api.spoonacular.com/recipes/informationBulk?ids=${idString}&apiKey=${process.env.spoon_key}`
		})
		.then((response) => {
			let transformedObj = transformData(response.data)
			res.send(transformedObj)
		})
		.catch((error) => {
			console.log(`*****ERROR AT SECOND AXIOS CALL: ${error}*****`);
			res.sendStatus(500)
		})
	})
	.catch((error) => {
		console.log(`*****ERROR AT FIRST AXIOS CALL: ${error}*****`);
		res.sendStatus(500)
	})
})

module.exports = router;