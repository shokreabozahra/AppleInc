var message = '';

var device = prompt('What kind of devices do you want? 1.PC 2.iphone 3.Apple TV ');
console.log(device);

if (device == 1) {
    message = 'PC';

} else if (device == 2) {
    message = 'iphone';
} else if (device == 3) {
    message = 'Apple TV';

}
else {
    message = 'welcome'
}

document.write('<h1>' + message + '</h1>');


var userName = prompt('whats you name?');
alert('welcome' + userName);



var order = prompt('what kind of Devices you need apple tv or iphone or pc');

while (order !== 'apple tv' && order !== 'iphone' && order !== 'pc') {
    order = prompt('please write only apple tv or iphone or PC ')
}



var device = '';

if (order === 'apple tv') {
    device = '<img src="https://www.jawalok.com/wp-content/uploads/apple-ne-sortira-pas-de-television-600x336.jpg"width="1000px" />';
} else if (order === 'iphone') {
    device = '<img src="https://i.middle-east-online.com/styles/home_special_coverage_1920xauto/s3/2019-09/p.jpg?MHAjioapoxV_CtOsN8MkeP9pI2I3sIE2&itok=VBgNruVC"width="1000px" />';
} else if (order === 'pc') {
    device = '<img src="https://www.apple.com/v/macbook-air/i/images/meta/macbook-air_overview__15sjf4iagj6q_og.png?202011300543"width="1000px" />';
}

var numDevices = prompt('how many devices you need');

for (var i = 0; i < numDevices; i++) {
    console.log(i);
    document.write(device);

}


