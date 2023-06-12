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
    dogsHeading.innerText = 'Dog Breeds'
    const breedsUl = document.createElement("ul")
    breedsListContainer.append(dogsHeading, breedsUl)
    dogsArr.forEach(dog => {
        const breedLi = document.createElement("li")
        breedLi.innerText = dog
        breedsUl.append(breedLi)
        breedLi.addEventListener('click', () => {
            fetchRandomDogImageByBreed(dog)
        })
    });
}

function fetchRandomDogImageByBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(dogURL => renderRandomDogImage(dogURL.message))
    .catch(err => console.error(err));
}

function renderRandomDogImage(dogURL) {
    breedsListBtn = document.createElement('button');
    breedsListBtn.innerText = 'Return to List';
    breedsListBtn.addEventListener('click', () => fetchDoggies());
    console.log(dogURL)
    breedsListContainer.innerHTML = ''
    dogImg = document.createElement('img')
    dogImg.src = dogURL
    breedsListContainer.append(breedsListBtn, dogImg)
}

function init() {
    fetchDoggies();
}

init()