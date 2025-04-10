// *** IGNORE - USING AS REFERENCE FROM PAST PROJECT *** ///

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
// *** IGNORE - USING AS REFERENCE FROM PAST PROJECT *** ///


document.querySelector('#getRecipeBtn').addEventListener('click', getRecipe)

function getRecipe() {
  const ingredients = document.querySelector('#ingredients').value.trim()

  if (!ingredients) {
    alert('Please enter some ingredients.')
    return
  }


const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredients)}`

fetch(searchUrl)
  .then(res => res.json())
  .then(data => {
    const meals = data.meals;

    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    const mealId = randomMeal.idMeal;
    
    const detailUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    return fetch(detailUrl)
  })

  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0]
    displayRecipe(meal)
  })
}

function displayRecipe(meal) {
  document.querySelector('#recipeTitle').innerText = meal.strMeal;
  document.querySelector('#recipeImage').src = meal.strMealThumb;
  document.querySelector('#recipeInstructions').innerText = meal.strInstructions;
  document.querySelector('#recipeContainer').style.display = 'block';
}