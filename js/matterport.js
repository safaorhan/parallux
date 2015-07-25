$('.model3d').click(function(e){
	e.preventDefault();
	modelID = $(this).data('model-id');
	$('#player iframe').remove();
	$('#player').append('<iframe class="showcase" width="100%" height="400px" src="https://my.matterport.com/webgl_player/#model=' + modelID + '" frameborder="0" allowfullscreen></iframe>');
	scrollToSection('try-it');
});

function scrollToSection(sid){
    var section = $("section[id='"+ sid +"']");
    $('html,body').animate({scrollTop: section.offset().top - 50},'fast');
}