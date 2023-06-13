let dogsArr

const breedsListContainer = document.getElementById('breeds-list')

function fetchDoggies() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        dogsArr = Object.keys(data.message)
        renderDogBreeds(dogsArr)
    })
}

function renderDogBreeds(dogsArr) {
    breedsListContainer.innerHTML = ''
    const dogsHeading = document.createElement('h3')
    dogsHeading.textContent = 'Dog Breeds'
    const breedsUl = document.createElement("ul")
    breedsListContainer.append(dogsHeading, breedsUl)
    dogsArr.forEach(dog => {
        const breedLi = document.createElement("li");
        const breedSpan = document.createElement("span");
        breedSpan.textContent = dog;
        breedLi.appendChild(breedSpan);
        breedsUl.append(breedLi);
        breedSpan.addEventListener('click', handleBreedClick);
    });
}

function fetchRandomDogImageByBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(dogURL => renderRandomDogImage(dogURL.message))
    .catch(err => console.error(err));
}

function renderRandomDogImage(randomDogImageUrl) {
    breedsListBtn = document.createElement('button');
    breedsListBtn.textContent = 'Return to List';
    breedsListBtn.addEventListener('click', handleBreedsListBtnClick);
    breedsListContainer.innerHTML = ''
    dogImg = document.createElement('img')
    dogImg.src = randomDogImageUrl
    breedsListContainer.append(breedsListBtn, dogImg)
}

function searchForm() {
    const inputSearch = document.getElementById('search-input')
    console.log(inputSearch)
    inputSearch.addEventListener('input', handleSearchFormInput);
}

// Event listeners

function handleBreedClick(e) {
    const breed = e.target.textContent;
    fetchRandomDogImageByBreed(breed);
}

function handleBreedsListBtnClick() {
    fetchDoggies();
}

function handleSearchFormInput(e) {
   let userInput = e.target.value
   let filteredBreeds = dogsArr.filter(breed => breed.includes(userInput));
    renderDogBreeds(filteredBreeds);
}

function init() {
    fetchDoggies();
    searchForm();
}

init()