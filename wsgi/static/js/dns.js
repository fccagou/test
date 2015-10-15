




function gethostbyname(hostname) {

    var req = new XMLHttpRequest();
    req.open('GET', '/getip?host=' + hostname);
    req.send(null);
    return req.responseText;

}

function getmyip() {
    var req = new XMLHttpRequest();
    req.open('GET', '/myip');
    req.send(null);
    return req.responseText;
}




