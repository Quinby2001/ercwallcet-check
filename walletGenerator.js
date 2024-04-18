// walletGenerator.js
function generateWalletAddress() {
    const prefix = "0x";
    let address = prefix;
    for (let i = 0; i < 40; i++) {
        address += Math.floor(Math.random() * 16).toString(16); // 生成随机十六进制数字
    }
    return address;
}

module.exports = generateWalletAddress;
