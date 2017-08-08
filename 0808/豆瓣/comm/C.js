var num = 1;
var val = '';
$('button').click(function(){
	num = 1;
	$('span').eq(0).addClass('red');
	val = $('input').val();
	Model(val,num-1);
	if(!window.location.hash){
		window.location.hash = 'page=1';
	}else{
		var hs = window.location.hash.split('=')[0];
		if(hs*1<1){
			hs=1;
			window.location.hash = 'page=1';
		}
	}
});
$('#change').click(function(ev){
	if(ev.target.tagName == 'SPAN'){
		num = $(ev.target).html();
		window.location.hash ='page='+ num;
	}
})
window.onhashchange = function(){
	$('#app').find('ul').html('');
	Model(val,num-1);
}
