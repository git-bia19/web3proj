var Tx = require("ethereumjs-tx");
const Web3 = require('web3');
const web3 = new Web3 ("https://ropsten.infura.io/v3/06dc301766a746abbede8831129fef06");

const account1= '0xb8Dc3A26A89a6cFA4EeA6CeC6B3b3c2344b8ade9';
const account2= '0x54717DFD4AF56fEC737bfbd59498DEb5D889bC5f';

const privateKey1 ='2C42C9C3B4ACE31244105F89CDED237881AA46935DBCC26FD58697DC30B743BC';
const privateKey2 ='677142BBB0588585F17C54C80AF2410C57A10562D82FFD569FBF8279E6787A34';

const pvtKey1Buffer =Buffer.from(privateKey1,'hex');
const pvtKey2Buffer =Buffer.from(privateKey2,'hex');


console.log("Buffer1:",pvtKey1Buffer);
console.log("Buffer2:",pvtKey2Buffer);


web3.eth.getTransactionCount(account2, (err,txCount)=> {

    const txObj = {
       nonce: web3.utils.toHex(txCount),
       to: account1,
       value: web3.utils.toHex(web3.utils.toWei('2','ether')),
       gasLimit:web3.utils.toHex(21000),
       gasPrice: web3.utils.toHex(web3.utils.toWei('30','gwei')),
       
    }

const tx = new Tx.Transaction(txObj,{chain: 'ropsten'});
tx.sign(pvtKey2Buffer);

const serializedTx = tx.serialize();
const  raw = '0x' + serializedTx.toString('hex');

//console.log("tx",tx);
//console.log("raw",raw);
//console.log("serializedTx",serializedTx);

web3.eth.sendSignedTransaction(raw, (err,txHash) => {
    console.log('txHash:', txHash)
});
});

