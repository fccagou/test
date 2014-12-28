

var led_state_display=["img/led_white.png", "img/led_red.png",
    "img/led_green.png"];
var led_msg=["off", "on"];
var led_state=[0,0];


function getmyip() {
    var req = new XMLHttpRequest();
    req.open('GET', '/myip');
    req.send(null);
    return req.responseText;
}

function arset (key, value) {
    var req = new XMLHttpRequest();
    req.open('GET', '/arduino/'+key+'/set/'+value, false); 
    req.send(null);
    return req.responseText;
}


function led_on(led) {
    arset(led,1);
}

function led_off(led) {
    arset(led,0);
}

function arget (key) {
    var req = new XMLHttpRequest();
    req.open('GET', '/arduino/'+key+'/get', false); 
    req.send(null);
    return req.responseText;
}


function led_switch(led) {
    if (led_state[led-1] == 0)
        led_on("led"+led);
    else
        led_off("led"+led);

    //TODO: do not use arget because the value is yet known.
    led_update(led);

    var ip = getmyip();
    arset('switcher_led'+led, ip);
}

function led_update(led) {
    led_name="led"+led;
    state = arget(led_name);
    led_state[led - 1]=state;

    entry = "arduino_"+led_name;
    
    switcher = arget('switcher_'+led_name);

    if (state == 1)
        document.getElementById(entry).src=led_state_display[led];
    else
        document.getElementById(entry).src=led_state_display[state];

    document.getElementById(led_name+"_description").innerHTML=led_name+" was switched "+led_msg[state]+" by "+switcher;
}



function update_label (key, entry) {
    document.getElementById(entry).innerHTML=arget(key);
}


var auto_update;
var is_auto_check = false;

function ar_manual_check() {
    clearInterval(auto_update);
    ar_update_interface();
    document.getElementById("ar_update").innerHTML = "auto update is off";
    is_auto_check = false;
}

function ar_auto_check() {
    auto_update = setInterval(function () { ar_update_interface() }, 1000); 
    document.getElementById("ar_update").innerHTML = "auto update is on";
    is_auto_check = true;
}

function ar_switch_check () {

    if (is_auto_check) {
        ar_manual_check ();
    } else {
        ar_auto_check ();
    }
}


function ar_update_interface() {
    led_update(1);
    led_update(2);
}




//    <p id="demo"></p>
//    var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}'
//
//    var obj = JSON.parse(text);
//
//    document.getElementById("demo").innerHTML =
//    obj.name + "<br>" +
//    obj.street + "<br>" +
//    obj.phone;
//




