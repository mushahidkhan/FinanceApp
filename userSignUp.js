$(document).ready(function(){
	var web3Provider; 
	$(".submitUserSignUp").click(function(){
		var email = $("#email").val();
		var password = $("#pwd").val();
		var userName = $("#usr").val();

		if(email == "" || password == "" || userName == "") {

		} else {
			initWeb3();
		}
	});

	function initWeb3() {
		if (typeof web3 != 'undefined') {
        	App.web3Provider = web3.currentProvider;
      	} else {
        	App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      	}  
      	web3 = new Web3(App.web3Provider);
	   	return App.initContract();
 
	}
});