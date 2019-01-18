function isMAC48Address(inputString) {
    return /^(([0-9]|[A-F])([0-9]|[A-F])\-){5}([0-9]|[A-F])([0-9]|[A-F])$/.test(inputString);
}
