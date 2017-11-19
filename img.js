$.get(BUCKET_URL)
 .done(function(data) {
	var xml = $(data);
	var xml_data = xml.find('Contents');
	var images = $.map(xml.find('Contents'), function(item){
		item = $(item);
		key = item.find('Key').text();
		hash_image = '#' + key.split('/')[0];
		if( hash == hash_image ){
			return BUCKET_URL + key;
		}
	});

	console.log(images);

	images.forEach(function( url){
		$( "#slideshow" ).append( "<div><img src="+url+"></div>" );
	});

	$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
});
