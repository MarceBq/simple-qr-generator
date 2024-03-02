const buttonElement = document.querySelector('.button');
const inputElement = document.querySelector('.input-text');

const openQrPage = () => {
    window.location.href = './qr.html';
}



buttonElement.addEventListener('click', () => {
    if (inputElement.value  === '' || inputElement.value  === ' ') {
        alert('Please enter a valid URL');
    } else {
        localStorage.setItem('url', inputElement.value);    
        openQrPage();
    }
});