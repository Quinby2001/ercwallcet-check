// walletHistory.js
const walletCheck = require('walletcheck');

function getTransactionHistory(address) {
    if (!walletCheck.isValidErcAddress(address)) {
        console.log("无效的 ERC 钱包地址。");
        return;
    }

    // 假设的交易历史数据
    console.log(`查询地址 ${address} 的交易历史...`);
    return [
        { hash: "tx1", from: address, to: "0xabc...", amount: "1 ETH", timestamp: "2021-01-01" },
        { hash: "tx2", from: "0xabc...", to: address, amount: "0.5 ETH", timestamp: "2021-02-01" }
    ];
}

module.exports = getTransactionHistory;
