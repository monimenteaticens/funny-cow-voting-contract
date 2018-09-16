pragma solidity ^0.4.23;

contract FunnyCowVoting {
    uint public totalVotes = 0;
    // cowID => votes
    mapping (bytes32 => uint) public votes;
    // address => votes
    mapping (address => bool) voters;

    function checkAddress() view public returns (bool) {
        return voters[msg.sender];
    }

    function getTotalVotes() view public returns (uint) {
        return totalVotes;
    }

    function getVotes(bytes32 _cowID) view public returns (uint) {
        return votes[_cowID];
    }

    function vote(bytes32 _cowID) public {
        require(!voters[msg.sender], "Already voted.");

        totalVotes += 1;
        votes[_cowID] += 1;
        voters[msg.sender] = true;
    }
}
