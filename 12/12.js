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

function retirarContenedorPos(stack, pos)
{
    let stack_aux = new Stack ();

    let item;

    for (let i = 0; i <= pos; i++)
    {
        if (i === pos)
        {
            stack.pop();
        }
        else
        {
            item = stack.pop();

            stack_aux.push(item);
        }
    }

    let num = stack_aux.size();

    for (let i = 0; i < num; i++)
    {
        item = stack_aux.pop();
        stack.push(item);
    }

    return stack.print();
}

