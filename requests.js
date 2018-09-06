var demo=$('#demo');
$('#myBtn').click(function(){
	var XHR=new XMLHttpRequest();
	XHR.open('GET', 'https://github.com/logomonicLearning/AjaxPractice/onePiece.json', true);
	XHR.onload=function(){
		var data=JSON.parse(XHR.responseText);
		renderHTML(data);
	};
	XHR.send();
});

function renderHTML(data){
	var myStr=""
	
	for(i=0;i<data.length; i++){
		myStr+="<p>"+data[i]+"</p>"
	}


	demo.insertAdjacentHTML('beforeend', myStr);	

}

