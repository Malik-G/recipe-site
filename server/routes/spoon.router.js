const express = require('express');
const router = express.Router();
const axios = require('axios');

//obj not iterable
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
			image: recipe.image,
			url: recipe.sourceUrl
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