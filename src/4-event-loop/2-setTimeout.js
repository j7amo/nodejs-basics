console.log('first');
// async operation is offloaded to the system kernel
setTimeout(() => console.log('third'), 0);
console.log('second');
