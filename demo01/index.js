function openPresent(event) {

    // What is event.currentTarget ?
    const image = event.currentTarget;
    image.src = './assest/cute_cat.gif';

    const title = document.querySelector('h1');
    title.textContent = 'Hooray!';


    // Hold up removeEventListener 😲
    image.removeEventListener('click', openPresent);
}

// What is querySelector 😅
const image = document.querySelector('img');
// Event hanlder is a openPresent
image.addEventListener('click', openPresent);