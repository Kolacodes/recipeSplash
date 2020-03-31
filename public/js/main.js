let form         = document.querySelector('#form');
let author = document.querySelector('#author');
let imgSrc         = document.querySelector('#recipeImage');

let recipeName         = document.querySelector('#recipeName');
let recipeList         = document.querySelector('.collection');
let directions         = document.querySelector('.directions');

let recipeShow = document.querySelector('.recipe-show');

// let directions2 = $("div").html(directions).text();

// String.prototype.toText = function(){
  //   return $(html).text();
  // }
  // let directions = html.toText();



// var directions2 = directions.replace(/<\/?[^>]+>/ig, " ");

// directions.innerHTML = html;
// return directions.textContent || directions.innerText || "";

// DOM Load event
document.addEventListener('DOMContentLoaded', getRecipes);
// get recipes from LS
function getRecipes(){
  let recipes;
  if(localStorage.getItem('recipes') === null){
    recipes = [];
  } else{
    recipes = JSON.parse(localStorage.getItem('recipes'));
  }

  recipes.forEach(function(recipe){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(recipe));
    // Append li to ul
    recipeList.appendChild(li);  

  })
}

// create a recipe
  form.addEventListener('submit', publishRecipe);
  

function publishRecipe(e){
  if(author.value === ''){
    alert("enter author's name")
  }

// ##### Create Recipe Area Start ##### 

  // 01 Recipe Image Area


  // create a div then add class:container
  let Containerdiv = document.createElement('div');
  // add class: container
  Containerdiv.className = 'container';
  // append container div to recipeShow section
  recipeShow.appendChild(Containerdiv);

  // create another div and add classes: recipe-post-area..
  let div1 = document.createElement('div');
  // add classes 
  div1.className = 'recipe-post-area section-padding-80';
  // append div1 to recipeShow section
  Containerdiv.appendChild(div1);

  // create image div to be appended to div1
  let imgDiv = document.createElement('div');
  // add classes
  imgDiv.className = 'row col-12 receipe-slider';
  // append imgDiv to div1
  div1.appendChild(imgDiv)

  // create img element
  let img = document.createElement('img');
  img.setAttribute('src', imgSrc.value);
  // img.setAttribute('class', 'receipe-slider container');
  // append img to imgDiv
  imgDiv.appendChild(img)


  // 02 Recipe Content Area

  // create recipe-content-area div
  let contentAreaDiv = document.createElement('div');
  // add classes
  contentAreaDiv.className = 'container';
  // append contentAreaDiv to recipe-show section
  recipeShow.appendChild(contentAreaDiv);

  // add recipe title div
  let recipeTitleDiv = document.createElement('div');
  // add classes
  recipeTitleDiv.className = 'receipe-headline my-5';
  // add text node to reci
  // append recipeTitleDi to contentAreaDiv
  contentAreaDiv.appendChild(recipeTitleDiv);

  // create and add date span to recipeTitleDiv
  let dateSpan = document.createElement('span');
  // create and add text node to dateSpan
  dateSpan.appendChild(document.createTextNode('April 10, 2030'));
  // append dateSpan to recipeTitleDiv
  recipeTitleDiv.appendChild(dateSpan);

  // create and add h1 to recipeTitleDiv
  let h2 = document.createElement('h2');
  // add classes to heading h2
  h2.className = 'container row col-12 col-md-8 receipe-content-area';


  // create and add text node to h2
  h2.appendChild(document.createTextNode(recipeName.value));
  // append h2 to recipeTitleDiv
  recipeTitleDiv.appendChild(h2);



  // create row-div for ingredients and directions div 
  let ingreDirectionsDiv = document.createElement('div');
  // add classes
  ingreDirectionsDiv.className = 'row';
  // append ingreDirectionsDiv to contentAreaDiv(container)
  contentAreaDiv.appendChild(ingreDirectionsDiv);

  // create col div to be appended to earlier row div
  let colDiv = document.createElement('div');
  // add classes
  colDiv.className = 'col-12 col-lg-8';
  // append colDiv to rowDiv
  ingreDirectionsDiv.appendChild(colDiv);

  // create p to be appended to our column div
  
  let p = document.createElement('p');
  // create and add text node to p
  p.appendChild(document.createTextNode(directions.value));
  // append p to column
  colDiv.appendChild(p);

  // store in LS
  storeRecipeInLocalStorage(directions.value);

  // clear all inputs
  author.value  = '';
  imgSrc.value   = '';
  recipeName.value = '';
  directions.value = '';


  
  // <!-- Receipe Content Area -->
  // <div class="receipe-content-area">
  //     <div class="container">

  //         <div class="row">
  //             <div class="col-12 col-md-8">
  //                 <div class="receipe-headline my-5">
  //                     <span>April 05, 2018</span>
  //                     <h2>Vegetarian cheese salad</h2>
  //                 </div>
  //             </div>
  //         </div>

  //         <div class="row">
  //             <div class="col-12 col-lg-8">
  //                 <!-- Single Preparation Step -->
  //                 <div class="single-preparation-step d-flex">
  //                     <h4>01.</h4>
  //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>               
  //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
  //                 </div>
  //             </div>

  //             <!-- Ingredients -->
  //             <div class="col-12 col-lg-4">
  //                 <div class="ingredients">
  //                     <h4>Ingredients</h4>

  //                     <!-- Custom Checkbox -->
  //                     <div class="custom-control custom-checkbox">
  //                         <input type="checkbox" class="custom-control-input" id="customCheck1">
  //                         <label class="custom-control-label" for="customCheck1">4 Tbsp (57 gr) butter</label>
  //                     </div>                      
  //                 </div>
  //             </div>
  //         </div>


  e.preventDefault();
}

function storeRecipeInLocalStorage(recipe){
  let recipes;
  if(localStorage.getItem('recipes') === null){
    recipes = []
  } else{
    recipes = JSON.parse(localStorage.getItem('recipes'))
  }
  recipes.push(recipe)
  localStorage.setItem('recipes', JSON.stringify(recipes))
}




// load all events
loadEventListeners();

// load all events
function loadEventListeners(){
  // DOM Loaded
  document.addEventListener('DOMEventLoaded', getRecipes)
  // publish recipe
  form.addEventListener('submit', publishRecipe);
  //  delete recipe event
  deleteBtn.addEventListener('click', deleteRecipe)
  // wipe all recipes
  recipeList.addEventListener('click', wipeRecipe);
  // filter recipes
  filter.addEventListener('keyup', filterRecipes);
}