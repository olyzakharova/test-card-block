const URL = 'https://store.tildacdn.com/api/tgetproduct/'

fetch(URL)
  .then(response => response.json())
  .then((data) => {
      document.querySelector('.card-title').innerHTML = data.title;
      document.querySelector('.card-descr').innerHTML = data.descr;
      document.querySelector('.card-price').innerHTML += data.price;
      document.querySelector('.card-priceold').innerHTML += data.priceold;
      document.querySelector('.card-quantity').innerHTML += data.quantity;
      document.querySelector('.card-img1').src = data.images.split(',')[0].slice(9).slice(0, -2).replace(/\\|/g,'');
      document.querySelector('.card-img2').src = data.images.split(',')[1].slice(8).slice(0, -3).replace(/\\|/g,'');
      document.querySelector('.card-img-main').src = data.images.split(',')[0].slice(9).slice(0, -2).replace(/\\|/g,'');
    })
  .catch(error => console.log(error))

document.querySelector('.card-img1').addEventListener('click', function(){
    document.querySelector('.card-img-main').src = document.querySelector('.card-img1').src;
})

document.querySelector('.card-img2').addEventListener('click', function(){
    document.querySelector('.card-img-main').src = document.querySelector('.card-img2').src;
})

document.getElementById('card-button').addEventListener('click', function(){
    document.getElementById('modal').style.display = "flex"
    setTimeout(() => document.getElementById('modal').style.display = "none", 1000);
})