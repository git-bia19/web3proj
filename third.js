const rpcURL ="https://ropsten.infura.io/v3/06dc301766a746abbede8831129fef06";
let web3 = new Web3(rpcURL);
console.log("web3 instance =" ,rpcURL);

 
 let address ="0xC8CFdfE73Ee6BfC72552B9F68D4A59682e8FF21b";
 
 
 let abi =[
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "welcome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(abi,address);
//console.log("Contract",contract.methods);

contract.methods.getName().call(function (err,result){
console.log("msg:",result);
});
