/*3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. */

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

stack.push("Pueblo Origen")
stack.push("Pueblo 1")
stack.push("Pueblo 2")
stack.push("Destino")

function camino_recorrido(stack)
{
    let long = stack.items.length

    let arreglo = new Stack();

    console.log(stack.items);

    for (let i = 0; i < long; i++)
    {
        arreglo.push(stack.pop());
    }

    console.log(arreglo.items);
}