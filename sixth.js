var Tx = require("ethereumjs-tx");
const Web3 = require('web3');
const rpcURL ="https://ropsten.infura.io/v3/06dc301766a746abbede8831129fef06";
const web3 = new Web3 (rpcURL);

const account1= '0xb8Dc3A26A89a6cFA4EeA6CeC6B3b3c2344b8ade9';
////const account2= '0x54717DFD4AF56fEC737bfbd59498DEb5D889bC5f';

const privateKey1 ='2C42C9C3B4ACE31244105F89CDED237881AA46935DBCC26FD58697DC30B743BC';
//const privateKey2 ='677142BBB0588585F17C54C80AF2410C57A10562D82FFD569FBF8279E6787A34';

const pvtKey1Buffer =Buffer.from(privateKey1,'hex');
//const pvtKey2Buffer =Buffer.from(privateKey2,'hex');

const ContractAddress = "0xE58dEbc4d2FF15Aff995f13955e1594657F57399";
const abi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "welcome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract =new web3.eth.Contract(abi,ContractAddress)
console.log("Buffer1:",pvtKey1Buffer);
//console.log("Buffer2:",pvtKey2Buffer);


	console.log("Buffer 1 = ",pvtKey1Buffer);

	web3.eth.getTransactionCount(account1, (err, txCount)=>{
	
		const txObject = {
			nonce:    web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: ContractAddress,
			data: contract.methods.welcome("nabia").encodeABI()
		  }
	
		const tx = new Tx.Transaction(txObject, { chain: 'ropsten' });
		tx.sign(pvtKey1Buffer);
	
		const serializedTx = tx.serialize();
		const raw = '0x' + serializedTx.toString('hex');
	
		//console.log("tx = ",tx);
		//console.log("serializedTx = ",serializedTx);
		//console.log("raw = ",raw);
	
		web3.eth.sendSignedTransaction(raw, (err, txHash) => {
			console.log('txHash:', txHash)
		});
	});
	
	contract.methods.getName().call(function (err,result){
		console.log("Name = ",result)
	});