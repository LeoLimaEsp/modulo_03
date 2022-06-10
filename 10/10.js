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

stack.push(3)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(6)
stack.push(8)
stack.push(1)
stack.push(2)
stack.push(5)
stack.push(5)

function reemplazar(stack, nuevo_nuevo, parametro){
    
        let auxiliar = new Stack()
        let item
        
        for(let i = 0; i<parametro.forEach();i++) {
            item = stack.pop()
            auxiliar.push(item)
            // auxiliar.push(stack.pop())
        }
        auxiliar.print()
    }

    console.log(reemplazar(stack,1,1));






















    // function reemplazar(stack, nuevo_n, numero_a_remplazar){
    //     let nuevo_grupo = []
    //     for(let i =0; i< numero_a_remplazar; i++){
    //         nuevo_grupo.push(stack.pop())
    //     }
    //     return nuevo_grupo
    // }
    
    //     console.log(reemplazar(stack,9,1));