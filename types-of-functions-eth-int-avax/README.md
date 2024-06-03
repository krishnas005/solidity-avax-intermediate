# SarahToken - ERC20 Token Project

Token is an ERC20 token smart contract developed using Solidity. This project allows you to deploy your own ERC20 token on the Ethereum blockchain and interact with it using functions like minting, burning, and transferring tokens.

## Overview

The `Token.sol` file contains the Solidity code for the ERC20 token contract. Here's a brief overview of the contract functionality:

- The contract inherits from the OpenZeppelin `ERC20` contract, which provides standard ERC20 token functionality.
- It sets the token name to "Krishna Token" and symbol to "KS" during contract deployment.
- The `onlyOwner` modifier restricts certain functions to be callable only by the contract owner.
- The `mint` function allows the contract owner to mint new tokens and transfer them to a specified address.
- The `burn` function allows any token holder to burn their own tokens.
- The `transfer` function allows any token holder to transfer tokens to another address.

## Usage

To use the Token contract, follow these steps:

1. Deploy the `Token.sol` contract on the Ethereum blockchain using a Solidity compiler like Remix or Hardhat.
2. Interact with the deployed contract using functions like `mint`, `burn`, and `transfer` to manage tokens.

