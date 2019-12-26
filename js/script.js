checker = setInterval(()=>{
	if(document.querySelector("#ok") && document.querySelector("#ok").innerText.trim() == "Reconnect"){
		document.querySelector("#ok").click();
	}
	else if(document.querySelector('#connect > paper-button > span').innerText.trim() == 'Reconnect'){
		document.querySelector('#connect').click();
	}
},1000);

console.log("Start colab disconnect checker");