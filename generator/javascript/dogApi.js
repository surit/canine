
const randomButton = document.querySelector('.random-button');
const searchButton = document.querySelector('.search-btn')

function getRandomPhoto() {

    // save the place where we want to put the img on HTML
    const div = document.querySelector(".dog-img");

    if(div.hasChildNodes()) {
        div.removeChild(div.childNodes[0]);
    }

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        // save the response in an legible object
        return response.json(); // asincro. response
    })
    .then((data) =>{
        const image = document.createElement('img');
        image.src=`${data.message}`;
        image.alt="Random Dog Image";
        image.classList.add('photo');
        div.appendChild(image)
    })
    .catch((err) => {console.log('Request error', err)})
}

function getPhotosByBreed(e) {

    e.preventDefault()

    console.log('heyyy')

    const searchValue = document.querySelector('#search').value;
    const selectValue = document.querySelector('#select').value;

    const div = document.querySelector(".dog-img");

    if(div.hasChildNodes()) {
        div.innerHTML = '';
    }

    fetch(`https://dog.ceo/api/breed/${searchValue}/images/random/${selectValue}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.message.forEach(photo => {
          const newDiv = document.createElement('div');
          newDiv.innerHTML = `
            <div>
                <img src="${photo}" alt="Dog photo" />
            </div>
        `;  
        div.appendChild(newDiv);
        });
    })
    .catch((err) => {console.log('Request error', err)})
}




randomButton.onclick = getRandomPhoto;
searchButton.onclick = getPhotosByBreed;