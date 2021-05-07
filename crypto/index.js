// import Web3 from 'web3';

const contract_addr = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount1",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "pancakeCall",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token0",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "token1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"name": "startArbitrage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pancakeFactory",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_bakeryRouter",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "bakeryRouter",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pancakeFactory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

function connect(){
    // if (typeof window.ethereum !== 'undefined') {
    //     console.log('MetaMask is installed!');


    // }
    console.log('connecting');
    ethereum.request({ method: 'eth_requestAccounts' });
   
}



async function start() {
  
    var token0 = document.getElementById("token0").value; 
    var token1 =document.getElementById("token1").value; 
    var amount0 = document.getElementById("amount0").value; 
    var amount1 =document.getElementById("amount1").value; 

    await window.ethereum.enable().then(() => {
        const ArbitageContract = new web3.eth.Contract(abi, contract_addr);
        console.log("starting from addr: " + web3);
        ArbitageContract.methods
            .startArbitrage(token0, token1, amount0, amount1).send({from:web3.eth.accounts[0]});
    });
}

const ethEnabled = async () => {  if (window.ethereum) {    await window.ethereum.send('eth_requestAccounts');    window.web3 = new Web3(window.ethereum);    return true;  }  return false;}

window.addEventListener('load', (event)=>{
    ethEnabled().then(()=>{
        var account = web3.eth.accounts[0];
        document.getElementById("address").innerHTML = "account: " + account;
        var accountInterval = setInterval(function() {
          if (web3.eth.accounts[0] !== account) {
            account = web3.eth.accounts[0];
            document.getElementById("address").innerHTML = "account: " + account;
          }
        }, 100);

    });;

})