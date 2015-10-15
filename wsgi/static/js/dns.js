




function dns_gethostbyname(hostname) {

    var req = new XMLHttpRequest();
    req.open('GET', '/getip?host=' + hostname, false);
    req.send();
    return req.responseText;

}

function getmyip() {
    var req = new XMLHttpRequest();
    req.open('GET', '/myip');
    req.send(null);
    return req.responseText;
}




