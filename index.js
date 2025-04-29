let image = ['image1.WebP ', 'image2.WebP ', 'image3.WebP ','image4.WebP '];

setInterval(function () {
    let random = Math.floor(Math.random() * image.length);
    document.querySelector('.main-pic').src = `./Photos/${image[random]}`;
}, 1000);


    //document.querySelector('.main-pic').src = `/Photo-Website/Photos/image${random}.WebP `;
