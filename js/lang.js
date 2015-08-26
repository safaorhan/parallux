function setLanguage (l) {
	Cookies.set('lang', l);
	setupUi();
}

function setupUi () {
	var lang = Cookies.get('lang');

	if(!lang) {
		lang = "en";
	}

	var uiText = JSON.parse(uiData);


	$(".multilang").each(function(index, value){
		var textId = $(this).attr('textid');
		$(this).text(uiText[textId][lang]);
	});

}
