const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result)


const email = 'makarsobolivskii@icloud.com';
console.log(email);
console.log(email.includes('@'));


const my = 'My';
const name = 'name';
const is ='is';
let fullName = `${my} ${name} ${is}`;
fullName = `${my} ${name} ${is} Makar`;
console.log(fullName);


const userName = prompt("Введіть ваше ім'я");
const payment = 300;
console.log(alert('Дякуємо, ' + userName + '! До оплати ' + payment + ' гривень'))
