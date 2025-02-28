function domainName(url) {
    let domain = url.replace(/^https?:\/\//, '');
    domain = domain.replace(/^www\./, '');
    const domainName = domain.split('.')[0];

    return domainName;
}