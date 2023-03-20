const  EventEmitter  = require('stream');
const myEventEmitter = new EventEmitter();


const makeCoffee = ({name}) => {
    console.log(`kopi ${name} telah dibuat!`);
};

myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });



//bisa juga di buat dua action listener

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });