//not require web3 as written in index.html
const rpcURL = "http://127.0.0.1:7545";
let web3 = new Web3(rpcURL);
console.log("web3 instance =" ,rpcURL);

let address ="0x7fb9bbc80c71a8090b35FD63714De9391C1A8CBf";

web3.eth.getBalance(address,function(err,wei){
console.log("Wei",wei);
let balance = web3.utils.fromWei(wei,"ether");
console.log("Balance",balance);
});