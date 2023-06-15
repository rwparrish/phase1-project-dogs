const breedsListDiv = document.getElementById('breeds-list')
let dogsArr

// fetch data and process it into an array then pass it renderDoggies
function fetchDoggies() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        dogsArr = Object.keys(data.message);
        renderDoggies(dogsArr);
    })
}

function renderDoggies(dogsArr) {
    const dogsUl = document.createElement('ul');
    breedsListDiv.append(dogsUl)
    dogsArr.forEach(dog => {
        const dogLi = document.createElement('li')
        dogLi.textContent = dog
        dogsUl.append(dogLi)
    })
}

fetchDoggies()