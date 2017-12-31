pragma solidity ^0.4.16;

contract AskAQuestion {

	struct PostDetails {
		string title;
		string description;
		string days;
	}

	mapping (address[] => PostDetails);

	function submitFinanceQuestion(string title, string description, string days) payable {

	}
}