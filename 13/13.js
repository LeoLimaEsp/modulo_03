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

let stack_contents = new Stack();
stack_contents.push(3)
stack_contents.push(2)
stack_contents.push(3)
stack_contents.push(4)
stack_contents.push(6)
stack_contents.push(8)
stack_contents.push(1)
stack_contents.push(2)
stack_contents.push(5)
stack_contents.push(5)

function retirar_contenedor_id(stack, id)
{
    let auxiliar = []

    let salir = 1

    let cantidad = 0

    do
    {
        if (stack.peek() == id)
        {
            stack.pop()
            
            salir = 0
        }
        else
        {
            auxiliar.push(stack.pop())

            cantidad++
        }
    }
    while (salir == 1)

    for (i = cantidad -1; i >= 0; i--)
    {
        stack.push(auxiliar[i])
    }
    return stack.items
}

/*Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.*/