class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }
    
    dequeue() {
        return this.items.shift()
    }
    
    peek() {
        return this.items[0]
    }
    
    size() {
        return this.items.length
    }
    
    print() {
        console.log(this.items)
    }
    
    isEmpty() {
        return this.items.length == 0
    }
    
    front() {
        return this.peek()
    }
    
    back() {
        return this.items[this.items.length - 1]
    }
}

let queue_2 = new Queue();

queue_2.enqueue({ user:'User1', ticket:true   })
queue_2.enqueue({ user:'User2', ticket:true   })
queue_2.enqueue({ user:'User3', ticket:false  })
queue_2.enqueue({ user:'User4', ticket:true   })
queue_2.enqueue({ user:'User5', ticket:false  })
queue_2.enqueue({ user:'User6', ticket:false  })
queue_2.enqueue({ user:'User7', ticket:true   })
queue_2.enqueue({ user:'User8', ticket:true   })
queue_2.enqueue({ user:'User9', ticket:true   })
queue_2.enqueue({ user:'User10', ticket:false })
queue_2.enqueue({ user:'User11', ticket:true  })

function sin_colados(queue) {
    let colados = new Queue()
    
    let size = queue.size()

    console.log("Inicial:")
    queue.print()

    for(let i = 0; i<size ; i++) {
        if(queue.peek().ticket) {
            queue.enqueue(queue.dequeue())
        } else {
            colados.enqueue(queue.dequeue())            
        }
    }
    
    console.log("Retirados:")
    colados.print()

    console.log("Final:")
    queue.print()

}
