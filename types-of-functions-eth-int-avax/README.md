# ERC20 Token Project

MyToken is an ERC20 token smart contract developed using Solidity. This project allows you to deploy your own ERC20 token on the Ethereum blockchain and interact with it using functions like minting, burning, and transferring tokens.

## Overview

The `MyToken.sol` file contains the Solidity code for the MyToken ERC20 token contract. Here's a brief overview of the contract functionality:

- The contract inherits from the OpenZeppelin `ERC20` contract, which provides standard ERC20 token functionality.
- It sets the token name to "Krishna Token" and symbol to "KS" during contract deployment.
- The `onlyOwner` modifier restricts certain functions to be callable only by the contract owner.
- The `mint` function allows the contract owner to mint new tokens and transfer them to a specified address.
- The `burn` function allows any token holder to burn their own tokens.
- The `transfer` function allows any token holder to transfer tokens to another address.

## Usage

To use the MyToken contract, follow these steps:

1. Deploy the `MyToken.sol` contract on the Ethereum blockchain using a Solidity compiler like Remix or Hardhat.
2. Interact with the deployed contract using functions like `mint`, `burn`, and `transfer` to manage tokens.

## Code Explanation 

Here is the line by line code explanation:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import the OpenZeppelin ERC20 token contract
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    // Define the owner of the contract
    address public owner;

    // Constructor function to initialize the contract
    constructor() ERC20("Krishna Token", "KS"){        
        // Set the owner of the contract to the address that deployed it
        owner = msg.sender;
    }

    // Modifier to ensure that only the owner can call certain functions
    modifier onlyOwner() {
        // Check if the caller is the owner
        require(msg.sender == owner, "Only the owner can call this function!");
        // Continue with the function call
        _;
    }

    // Function to mint a specified amount of tokens
    function mint(uint256 _amount) public onlyOwner {
        // Mint the specified amount of tokens to the owner
        _mint(owner, _amount);
    }

    // Function to burn a specified amount of tokens
    function burn(uint256 _amount) public {
        // Check if the owner has sufficient balance to burn the tokens
        require(balanceOf(owner) >= _amount, "Insufficient balance");
        // Burn the specified amount of tokens
        _burn(owner, _amount);
    }

    // Function to transfer tokens to another address
    function transfer(address _recipient, uint256 _amount) public override returns (bool) {
        // Check if the owner is not transferring to themselves
        require(owner != _recipient,"You cannot transfer to yourself!");
        // Check if the owner has sufficient balance to transfer the tokens
        require(balanceOf(owner) >= _amount, " Amount to transfer is greater than balance");
        // Transfer the tokens to the specified recipient
        _transfer(_msgSender(), _recipient, _amount);
        // Return true to indicate successful transfer
        return true;
    }
}

```
   

