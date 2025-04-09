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


document.querySelector('getRecipeBtn').addEventListener('click', getRecipe)

function getRecipe() {
  const ingredients = document.querySelector('#ingredients').value.trim()

  if (!ingredients) {
    alert('Please enter some ingredients.')
  }
}

const url = ``

fetch(url)
  .then(res => res.json())
  .then(data => {

  })