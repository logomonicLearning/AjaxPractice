var demo=$('#demo');
$('#myBtn').click(function(){
	var XHR=new XMLHttpRequest();
	XHR.open('GET', 'https://github.com/logomonicLearning/Timer/index.html', true);
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

{
	{
		"name":  "Monkey, D Luffy",
		"age": 20,
		"temprament":{
			"likes":["Meat", "fighting"],
			"dislikes":[]
		}
	},

	{
		"name": "Sanji",
		"age": 25,
		"temprament":{
			"likes":["Meat", "fighting"],
			"dislikes":[]
		}
	},

	{
		"name": "Nami",
		"age": 22,
		"temprament":{
			"likes":["Meat", "fighting"],
			"dislikes":[]
		}
	},

	{
		"name": "Zoro",
		"age": 32,
		"temprament":{
			"likes":["Meat", "fighting"],
			"dislikes":[]
		}
	}
}