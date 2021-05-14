require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember common half fashion flower slice'; 
let testAccounts = [
"0xb2e257be0fc010b1ee2446b14f78a550009c54a02f1bac0b93e6cfd31b86f69d",
"0x09aeff409cde6af3482db46d7d386f56a9c3176163df0d55a98b4912c2831602",
"0x0b396a3d33fda4276e5f891dea63ba505a27bdebf449b5f4b8ee0201c26512fd",
"0xb92e158b14c693eb5754c7528f3b3b99bd492cd16dad6c5f65dfc36610e513a1",
"0xeb9561e91a92d0079f560aac2a0ab89a1dc0cfbc11c9416b46c129ba25eb410c",
"0x807179975f30a3be796f8129a3d580f0bc46328c0bc8d0d8638681e8bfa4d4db",
"0x98726f83653aa72c199701062e950e6c2b8bfcb5ef6c616dfd4e7c828ef91dc0",
"0xcb1d12fc381ed32ba9c6d816ffa24fc021482bc8028d2562dcbe49abbf3d6837",
"0x7b5468ce585a639561357185fda9ef50e6344a65b589a09e094f18bd96144e04",
"0xeb776ea362a34c5e8674e5e7ea0e9f0d2d3f9210e5c221344f720f1427087d1f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
