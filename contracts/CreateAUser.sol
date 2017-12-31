pragma solidity ^0.4.16;

contract CreateAUser {
	struct UserData {
		string name;
		string email;
		string password; 
	}

	mapping (address[] => UserData) userDataMapping;

}