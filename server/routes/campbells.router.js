const express = require('express');
const router = express.Router();
const axios = require('axios');

function transformData(obj) {
	//console.log(obj)
	let transformedObj = []
	for (let recipe of obj) {
		let newObj = {
			title: recipe.Name,
			image: recipe.RecipeMetaRecords[3].Value,
			url: `https://www.campbells.com/kitchen/recipes/${recipe.Name.replace(/ /g, "-")}`
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
