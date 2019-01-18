function findEmailDomain(address) {
    return address.match(/(\@)(?!.*\@).*/).toString().substr(1).slice(0, -2);
}
