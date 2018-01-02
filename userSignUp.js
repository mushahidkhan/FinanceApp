$(document).ready(function(){
 	var web3Provider;
	var userJSON;
	var fs = require("fs");
	var Web3 = require("web3");
	var web3;
	const series = require('async/series')
	const IPFS = require('ipfs')
	const node = new IPFS()
	var fileMultihash;

	$(".submitUserSignUp").click(function(){
		//if ($("#email").val() == "" || $("#pwd").val() == "" || $("#usr").val() == "") {

		//} else {
			initWeb3();
		//}
	});

	function initWeb3() {
		if (typeof web3 != 'undefined') {
        	 web3 = new Web3(web3.currentProvider);
      	} else {
      		console.log("2");
        	 web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
      	}  
	   	 setUserJSON();
	}

	function setUserJSON() {
		console.log(web3);
		var fileMultihash ="123";
		web3.eth.getAccounts (function (error, accounts) {
			if (error) {
				console.log(error);
			}
			console.log(accounts);
			var userAccount = accounts[0];
			userJSON = {
				userEmail : "email",
				userPassword : "pass",
				userName : "username",
				userAccount : userAccount
			};		
			series([
			  // (cb) =>  node.files.add({
			  //   path: userAccount + '.txt',
			  //   content: Buffer.from(JSON.stringify(userJSON))
			  // }, (err, filesAdded) => {
			  // 	console.log("asdf")
			  //   if (err) { return cb(err) }
			  //   fileMultihash = filesAdded[0].hash
			  //   cb()
			  // }),
			  (cb) => node.files.cat(fileMultihash, (err, data) => {
			    if (err) { return cb(err) }
			    var dataToString = "";
				console.log(data);
			    console.log('\nFile content:')
				for(var i = 0; i < data.length; i++) {
					dataToString = dataToString + String.fromCharCode(data[i])
				}
			    console.log(JSON.parse(dataToString))
			  })
			])
		})
	};
});