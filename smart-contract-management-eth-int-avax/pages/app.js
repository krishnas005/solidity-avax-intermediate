const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const contractABI = [
    {
        "inputs": [],
        "name": "accountBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "accountExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "createAcc",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "reciever",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "transferAmount",
                "type": "uint256"
            }
        ],
        "name": "transferEther",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "withdrawAmount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];

let provider;
let signer;
let contract;

window.onload = async () => {
    await connectWallet();
    setupContract();
    setupUI();
};

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
        } catch (error) {
            console.error('User rejected the request.');
        }
    } else {
        provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
        signer = provider.getSigner();
    }
}

function setupContract() {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
}

function setupUI() {
    document.getElementById('createAccount').onclick = createAccount;
    document.getElementById('checkAccount').onclick = checkAccount;
    document.getElementById('checkBalance').onclick = checkBalance;
    document.getElementById('deposit').onclick = deposit;
    document.getElementById('withdraw').onclick = withdraw;
    document.getElementById('transfer').onclick = transfer;
}

async function createAccount() {
    try {
        const tx = await contract.createAcc();
        await tx.wait();
        alert('Account created successfully!');
    } catch (error) {
        console.error(error);
        alert('Failed to create account.');
    }
}

async function checkAccount() {
    try {
        console.log('Calling accountExists() function...');
        const exists = await contract.accountExists();
        console.log('AccountExists() result:', exists);
        if (exists) {
            const balance = await contract.accountBalance();
            console.log('AccountBalance() result:', balance);
            alert(`Account exists. Balance: ${balance} wei`);
        } else {
            alert('Account does not exist.');
        }
    } catch (error) {
        console.error('Error calling accountExists() function:', error);
        alert('Failed to check account.');
    }
}


async function checkBalance() {
    try {
        const balance = await contract.accountBalance();
        alert(`Your account balance is ${balance} wei`);
    } catch (error) {
        console.error('Error checking account balance:', error);
        alert('Failed to check account balance.');
    }
}





async function deposit() {
    const amount = document.getElementById('depositAmount').value;
    try {
        const tx = await contract.deposit({ value: ethers.utils.parseEther(amount) });
        await tx.wait();
        alert('Deposit successful!');
    } catch (error) {
        console.error(error);
        alert('Failed to deposit.');
    }
}

async function withdraw() {
    const amount = document.getElementById('withdrawAmount').value;
    try {
        const tx = await contract.withdraw(ethers.utils.parseEther(amount));
        await tx.wait();
        alert('Withdrawal successful!');
    } catch (error) {
        console.error(error);
        alert('Failed to withdraw.');
    }
}

async function transfer() {
    const receiver = document.getElementById('receiver').value;
    const amount = document.getElementById('transferAmount').value;
    try {
        const tx = await contract.transferEther(receiver, ethers.utils.parseEther(amount));
        await tx.wait();
        alert('Transfer successful!');
    } catch (error) {
        console.error(error);
        alert('Failed to transfer.');
    }
}
