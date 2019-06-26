$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-99 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.mob-menu__link').click(function() {
		$('.mob-menu').toggleClass('active');
	});
	$('.nav-list__item a').click(function() {
		$('.mob-menu').removeClass('active');
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	$('.nav-lang').click(function() {
		$('.nav-lang__select').toggleClass('active');
	});

	$('.head-slider').slick({
		fade: true,
		arrows: true,
		dots: true,
		appendArrows: $('.head-control'),
		appendDots: $('.head-control'),
		autoplay: true,
		pauseOnFocus: false,
		pauseOnHover:false
	});

	$('.advantages-item').matchHeight();

	// $(".services .col-md-3").hover(function(){
	// 	$(this).find('.services-item__btn').css("opacity", "1");
	// }, function(){
	// 	$(this).find('.services-item__btn').css("opacity", "0");
	// });

	$('.about-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.equipment-item').matchHeight();

	$('.works-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		appendArrows: $('.works-control'),
		appendDots: $('.works-control'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.clients-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		adaptiveHeight: true
	});

	$('.reviews-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		appendArrows: $('.reviews-control'),
		appendDots: $('.reviews-control'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.reviews-item__txt').matchHeight();
	
});
