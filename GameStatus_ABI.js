const GameStatus_ABI=[
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "sender", "type": "address" },
            { "internalType": "uint256", "name": "skiboardId", "type": "uint256" }
        ],
        "name": "buySkiBoard",
        "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "sender", "type": "address" }
        ],
        "name": "buyToken",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "_from", "type": "address" },
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "uint256", "name": "_id", "type": "uint256" },
            { "internalType": "uint256", "name": "_value", "type": "uint256" }
        ],
        "name": "erc1155TransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address", "name": "_owner", "type": "address" },
            { "internalType": "uint256", "name": "_id", "type": "uint256" }
        ],
        "name": "erc1155balanceOf",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address[]", "name": "_owners", "type": "address[]" },
            { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }
        ],
        "name": "erc1155balanceOfBatch",
        "outputs": [
            { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc1155contract",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_initialSupply",
                "type": "uint256"
            },
            { "internalType": "string", "name": "_uri", "type": "string" }
        ],
        "name": "erc1155create",
        "outputs": [
            { "internalType": "uint256", "name": "_id", "type": "uint256" }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "uint256", "name": "_id", "type": "uint256" },
            { "internalType": "uint256", "name": "_value", "type": "uint256" }
        ],
        "name": "erc1155ownerTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "string", "name": "_uri", "type": "string" },
            { "internalType": "uint256", "name": "_id", "type": "uint256" }
        ],
        "name": "erc1155setURI",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "internalType": "address", "name": "_owner", "type": "address" }
        ],
        "name": "erc20balanceOf",
        "outputs": [
            { "internalType": "uint256", "name": "balance", "type": "uint256" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc20contract",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc20decimals",
        "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc20name",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "uint256", "name": "_value", "type": "uint256" }
        ],
        "name": "erc20ownerTransfer",
        "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc20symbol",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "erc20totalSupply",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "_to", "type": "address" },
            { "internalType": "uint256", "name": "_value", "type": "uint256" }
        ],
        "name": "erc20transfer",
        "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "sender", "type": "address" },
            { "internalType": "uint256", "name": "score", "type": "uint256" }
        ],
        "name": "getToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "internalType": "address", "name": "sender", "type": "address" },
            { "internalType": "uint256", "name": "skiboardId", "type": "uint256" }
        ],
        "name": "startGame",
        "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
