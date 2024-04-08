const isValidErcAddress = require('./isValidErcAddress'); // 假设你的函数保存在名为 isValidErcAddress.js 的文件中

// 测试用例
const testCases = [
    { address: '0x1234567890123456789012345678901234567890', expected: true },
    { address: '0xG1234567890123456789012345678901234567890', expected: false },
    { address: '0x123456789012345678901234567890123456789', expected: false },
    { address: '1234567890123456789012345678901234567890', expected: false },
    { address: '0x12345678901234567890123456789012345678901234', expected: false }
];

// 运行测试
testCases.forEach((testCase, index) => {
    const result = isValidErcAddress(testCase.address);
    if (result === testCase.expected) {
        console.log(`Test ${index + 1}: Passed`);
    } else {
        console.log(`Test ${index + 1}: Failed - Expected ${testCase.expected} but got ${result}`);
    }
});
