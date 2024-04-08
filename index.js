const isValidErcAddress = require('./isValidErcAddress');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('请输入 ERC 钱包地址: ', (address) => {
    if (isValidErcAddress(address)) {
        console.log('这是一个合法的 ERC 钱包地址。');
    } else {
        console.log('这不是一个合法的 ERC 钱包地址。');
    }
    readline.close();
});
