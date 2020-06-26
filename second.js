const rpcURL ="https://ropsten.infura.io/v3/06dc301766a746abbede8831129fef06";
let web3 = new Web3(rpcURL);
console.log("web3 instance =" ,rpcURL);

let address ="0xb8Dc3A26A89a6cFA4EeA6CeC6B3b3c2344b8ade9";

web3.eth.getBalance(address,function(err,wei){
    if(err){
     console.log("Error",err)
    }

    else{
console.log("Wei",wei);
let balance = web3.utils.fromWei(wei,"ether");
console.log("Balance",balance);
}
});