# Bank DApp
Bank DApp is a decentralized application (DApp) that allows users to create bank accounts, deposit, withdraw, transfer Ether, and check their account balances on the Ethereum blockchain.

## Features
1. `Create Account`: Users can create a bank account by clicking the `Create Account` button. Each account is associated with the user's Ethereum address.

2. `Deposit`: Users can deposit Ether into their bank account by specifying the amount and clicking the `Deposit` button.

3. `Withdraw`: Users can withdraw Ether from their bank account by specifying the amount and clicking the `Withdraw` button.

4. `Transfer`: Users can transfer Ether from their account to another user's account by specifying the recipient's address and the amount to transfer.

5. `Check Account Existence`: Users can check if their account exists on the blockchain by clicking the `Check Account` button.

6. `Check Balance`: Users can check their account balance by clicking the `Check Balance` button.

## How to Start the Project

Follow these steps to start the Bank DApp:

1. Install Dependencies: Ensure you have  `nodejs` and `npm` installed on your machine

2. Clone the Repository: Clone the Bank DApp repository to your local machine using the following command:

```git clone https://github.com/krishnas005/solidity-avax-intermediate.git```

3. Navigate to Project Directory: Change your current directory to the cloned repository:
   
``` cd solidity-avax-intermediate\smart-contract-management-eth-int-avax  ```

4. Install Dependencies: Install the necessary dependencies by running:

``` npm install ```

5. Compile Smart Contract: Compile smart contract byt running: (The contract abi will be generated under artifacts/contract/BankApp.json)

  ``` npx hardhat compile ```

6. Deploy Smart Contract: Deploy the smart contract to the Ethereum network of your choice. Update the `contractAddress` variable in pages/app.js with the deployed contract address by running and `contractABI` variable with generated contract abi.

7. Start the DApp: Run the DApp by opening the  `index.html` file in a web browser. You can also serve the files using a local server.

8. Interact with the DApp: Use the buttons provided in the UI to create accounts, deposit, withdraw, transfer Ether, and check account balances.

