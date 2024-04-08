function isValidErcAddress(address) {
    // 检查地址长度
    if (address.length !== 42) {
        return false;
    }

    // 检查地址前缀
    if (!address.startsWith('0x')) {
        return false;
    }

    // 检查地址是否为有效的十六进制字符串
    const hexPattern = /^[0-9a-fA-F]+$/;
    const addressWithoutPrefix = address.slice(2); // 移除前缀 '0x'
    if (!hexPattern.test(addressWithoutPrefix)) {
        return false;
    }

    return true;
}

module.exports = isValidErcAddress;