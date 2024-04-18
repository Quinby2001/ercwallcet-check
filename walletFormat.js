// walletFormat.js
const walletCheck = require('walletcheck');

function formatWalletAddress(address) {
    if (walletCheck.isValidErcAddress(address)) {
        return address.toLowerCase(); // 或使用 toUpperCase() 根据需要格式化
    } else {
        console.log("无效的 ERC 钱包地址。");
        return null;
    }
}

module.exports = formatWalletAddress;
