const qrCodeContainer = document.querySelector('.qr-code');
const downloadButton = document.querySelector('.dowload-button');
const shareButton = document.querySelector('.share-button');

// Get url from local storage
const url = localStorage.getItem('url');


// Create qr code
const qrCode = new QRCode(qrCodeContainer, {
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
});

// Create qr code
function createQrCode(){
    qrCode.makeCode(`${url}`);
}

createQrCode();

function donwloadImg(){
    const qrCodeImage = document.querySelector('.qr-code img');

    const img = qrCodeImage.src;
    const linkImg = document.createElement('a');
    linkImg.href = img;
    linkImg.download = 'qr-code.png';
    linkImg.click();
    linkImg.remove();
}

downloadButton.addEventListener('click', () =>{
    donwloadImg();
});

// Share qr code 
shareButton.addEventListener('click', () => {  
    navigator.share({
        title: 'QR Code',
        text: 'QR Code',
        url: url,
    })
})