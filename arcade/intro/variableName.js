function variableName(name) {
    return /^([A-Za-z]{1}|\_{1})(\d|[A-Za-z]|\_)*$/.test(name);
}
