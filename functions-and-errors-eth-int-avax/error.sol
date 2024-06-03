// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandling {
    uint256 public balance;

    // Function to add to balance using require()
    function addToBalance(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        balance += amount;
    }

    // Function to check balance using assert()
    function checkBalance() public view {
        assert(balance >= 0);
    }

    // Function to withdraw from balance using revert()
    function withdraw(uint256 amount) public {
        if (amount > balance) {
            revert("Insufficient balance");
        }
        balance -= amount;
    }
}
