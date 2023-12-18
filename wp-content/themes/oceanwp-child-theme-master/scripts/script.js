const btnPopupClose = document.querySelector('.popup-close');

btnPopupClose.addEventListener('click' , function(){
    document.querySelector('.popup-overlay').style.display = 'none';
});
