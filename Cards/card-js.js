const products = document.querySelectorAll('.product');

if (products) {
	products.forEach(el => {
		let currentProduct = el;
		const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
		const imagePagination = currentProduct.querySelector('.image-pagination');
		if (imageSwitchItems.length > 1) {
			imageSwitchItems.forEach((el, index) => {
				el.setAttribute('data-index', index);
				imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
				el.addEventListener('mouseenter', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
				});

				el.addEventListener('mouseleave', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
				});
			});
		}
	});
}

$(document).ready(function(){

    $('.form-button').on('click', function(){
         $('.popup-container').css('display', 'flex');
    });
    $('.popup-container').on('click', function(event){
        if(event.target === this) {
         $('.popup-container').css('display', 'none');
        }
    });
    $('.send-button').on('click', function(){
        let name = $('#name').val();
        let tel = $('#tel').val();
 
        if(name.length !== 0 && tel.length !== 0) {
         $('input[type="text"]').removeClass('error');
         $('input[type="tel"]').removeClass('error');

         name = $('input[type="text"]').val('');
         tel = $('input[type="tel"]').val('');
 
         addToStorage();
 
     } 
     
     else {
         $('input[type="text"]').addClass('error');
         $('input[type="tel"]').addClass('error');
     };
 
    });
 });

 $(document).ready(function(){

    $('input[type="tel"]').inputmask({"mask": "+7(999) 999-9999"}); //specifying options

});