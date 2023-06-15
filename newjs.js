const breedsListDiv = document.getElementById('breeds-list')
let dogsArr
// append a ul to this breedsList
// interate and append li's to the ul - create an li forEach breed

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