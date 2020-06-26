var Tx = require("ethereumjs-tx");
const Web3 = require('web3');
const web3 = new Web3 ('http://127.0.0.1:7545');

const account1= '0x7fb9bbc80c71a8090b35FD63714De9391C1A8CBf';
const account2= '0xEe6888F41F7d19AEc009635bc94af16989e8E1C8';

const privateKey1 ='47499f19fc4fedf304264bacbbb3f84d300d3f32e06765e0c09864d42e8a9adc';
const privateKey2 ='1864e833c2d3b6cd6d7eaa004fd07a58a7a798bbe3dda2ad3656b05d180a3dae';

const pvtKey1Buffer =Buffer.from(privateKey1,'hex');
const pvtKey2Buffer =Buffer.from(privateKey2,'hex');

console.log("Buffer:",pvtKey1Buffer);
console.log("Buffer:",pvtKey2Buffer);


web3.eth.getTransactionCount(account2, (err,txCount)=> {

    const txObj = {
       nonce: web3.utils.toHex(txCount),
       to: account1,
       value: web3.utils.toHex(web3.utils.toWei('2','ether')),
       gasLimit:web3.utils.toHex(21000),
       gasPrice: web3.utils.toHex(web3.utils.toWei('30','gwei')),
    }


const tx = new Tx.Transaction(txObj);
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

