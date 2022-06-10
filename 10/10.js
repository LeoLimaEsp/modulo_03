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

function reemplazar(stack, nuevo_n, viejo_n)
{
    stack.print();

    let ultimoValor = 0;

    do
    {
        ultimoValor = stack.pop();

        if (ultimoValor === viejo_n)
        {
            console.log(`Es igual a ${ultimoValor}`);
            stack.push(nuevo_n);
        }
        else
        {
            console.log(`No es igual a ${ultimoValor}`)
        }
    }

    while (ultimoValor != viejo_n)

    stack.print();
}
    





















    // function reemplazar(stack, nuevo_n, numero_a_remplazar){
    //     let nuevo_grupo = []
    //     for(let i =0; i< numero_a_remplazar; i++){
    //         nuevo_grupo.push(stack.pop())
    //     }
    //     return nuevo_grupo
    // }
    
    //     console.log(reemplazar(stack,9,1));