const vendors = require('./vendors');
const stack = require('./Stack');
const queue = require('./Queue');

q = new queue();
              
console.log(q.dequeue());
  
// returns true
console.log(q.isEmpty());

q.enqueue(vendors[0]);
q.enqueue(vendors[1]);
q.enqueue(vendors[2]);
  
console.log(q.front());

console.log(q.dequeue());
  
console.log(q.front());
  
console.log(q.dequeue());
  
console.log(q.printQueue());

s = new stack();
    
// returns false
console.log(s.isEmpty()); 
  
// returns Underflow
console.log(s.pop()); 

s.push(vendors[0]);
s.push(vendors[1]);
s.push(vendors[2]);

console.log(s.printStack());
  
console.log(s.peek());
  
console.log(s.pop());
  
console.log(s.printStack()); 
