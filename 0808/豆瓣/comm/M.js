var n=0;
function Model(search,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:search,
			start:num
		},
		success:function(data){
			let t = template('temp',data);
			var h = '';
			$('#app').html(t);
			if(data.total>data.subjects.length){
				$('#change').css('display','block');
			}
			for(var i=0;i<data.total/data.subjects.length;i++){
				h+='<span>'+(i+1)+'</span>'
			}
			$('#change').html(h);
			$('span').eq(num).addClass('red');
		}
	})
}
