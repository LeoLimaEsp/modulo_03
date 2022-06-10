class Stack {

    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }
    
    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    size() {
        return this.items.length;
    }
    
    print() {
        console.log(this.items);
    }
}

let stack = new Stack(); 

stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandía')
stack.push('Melón')

function ret_elementos(stack,n) {
    let res = []

    for(let i = 0; i<n;i++) {
        res.push(stack.pop())
    }

    return res
}
console.log(ret_elementos(stack,4)) ;
