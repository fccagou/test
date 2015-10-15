
function isCagouAlive() {

    var req = new XMLHttpRequest();
    req.open('GET', '/iscagoualive' , false);
    req.send();

    if ( req.responseText == '1' ) {
	return dns_gethostbyname('lenidducagou')
    }

    return ''

}

function isCagouAlive2() {

	var response="";
	var ip = dns_gethostbyname('lenidducagou');

	if ( ip != "" ) {
		var req = new XMLHttpRequest();
		req.open('GET', 'http://'+ip+'/', false);
		try {
			req.send();
			if (req.status == 200 ) {
				response = ip;
			} else {
				response = "";
			}
		} catch(err) {
			// Error because of CrossPlateforme
			response = ip;
		}
		
	}
	return response;
}


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




