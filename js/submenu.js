const submenu = $('.submenu');

submenu.hide();

for(let i = 0; i < submenu.length; i++){

	$('.element'+String(i)).mouseenter(function(){
		$('.submenu:eq('+ String(i) +')').stop().slideDown(500);
	});

	$('.element'+String(i)).mouseleave(function(){
		$('.submenu:eq('+ String(i) +')').stop().slideUp(500);
	});

};