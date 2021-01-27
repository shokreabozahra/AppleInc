var message='';

var device = prompt('What kind of devices do you want? 1.PC 2.iphone 3.Apple TV ');
console.log(device);

if (device == 1){
    message = 'PC';

}else if (device == 2){
    message = 'iphone';
}else if (device == 3){
    message = 'Apple TV';

}








else{
    message = 'welcome'
}

document.write('<h1>' + message +'</h1>');


var userName = prompt('whats you name?');
alert('welcome' +userName);