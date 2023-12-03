const URL = 'https://api.chucknorris.io/jokes/';
let buttonJoke = document.querySelectorAll('.btn');
let categories = [];
getCategories();

function createCategories() {
    let categoriesDOM = document.querySelector('.categories');
    categories.forEach(element => {
        let categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('categories__container');
        let categoriesText = document.createElement('p');
        categoriesText.classList.add('categories__text');
        categoriesText.textContent = element;
        categoriesContainer.appendChild(categoriesText);
        categoriesDOM.appendChild(categoriesContainer);
        categoriesContainer.addEventListener('click', handdleSelectCategorie($event))
    });
}
function handdleSelectCategorie(){
    forEach()
}
function getCategories(){
    let nameURL = URL + 'categories';
    fetch(nameURL)
    .then(response =>{
        if(!response.ok){
            throw Error('No se pudo completar la solicitud'); 
        }
        return response.json();
    })
    .then(data => {
        if(data && data.length > 0){
            categories = data
            createCategories();
            getJoke();
        }
        else{
            console.error('problema')
        }
        
    })
    .catch(error => {
       console.error('Hubo un problema', error)
    })
};
function getJoke(){
    let nameURL = URL +'random';
    fetch(nameURL)
    .then(response => {
        if (!response.ok){
            throw Error('No se pudo completar la solicitud');
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
        if(data && data.value){
            let joke = document.querySelector('.joke');
            joke.textContent = data.value;
        }
        else{
            console.error('error')
        }
    })
    .catch(error =>{
        console.error('error', error)
    })
}





