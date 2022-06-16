class Node {
    constructor(data) {
        this.data = data // 5
        this.next = null
    }
}
//---------------------------------------------------------------------------------------------------------------------
class LinkedList {
    constructor() {
        this.head = null
    }
//---------------------------------------------------------------------------------------------------------------------
    insert(data) {
       let node = new Node(data)
       if(this.head != null) {
            // this.head.next = node
            let current = this.head
            while(current.next != null) {
                current = current.next  // this.head.next
            }
            // current = Node(6)
            current.next = node
       } else {
            this.head = node
       }
    }
//---------------------------------------------------------------------------------------------------------------------
    delete(data) {
        if(this.head != null) {
            let current = this.head
            let previous = this.head

            while(current.next != null) {
                previous = current
                current = current.next  // this.head.next
                
                if(current.data == data) {
                    previous.next = current.next
                    break
                }
            }
            
        }
        
    }
//-------------------------------------------------------------------------------------------------------------------  
    print() {
        let results = []
    
        if(this.head != null) {
            let current = this.head
            
            while(current != null) {
                results.push(current.data)
                current = current.next
            }   
            console.log(results)
        }
    }
//--------------------------------------------------------------------------------------------------------------------
    find(data) {
        if(this.head != null) {
            let current = this.head
            
            while(current != null) {
                if(current.data == data) {
                    return current
                }
                current = current.next;
            }
            
        }
    }

//---------------------------------------------------------------------------------------------------------------------
    numeroRepetido(data)
{
    if (this.find(data) == undefined)
    {
        this.insert(data);
    }
    else
    {
        console.log(`El valor ${data} ya se encuentra en uso, no se puede repetir.`)
    }
}

//-------------------------------------------------------------------------------------------------------------------
    findMayor(data)
    {
        if (this.head != null)
        {
            let current = this.head;
            while(current != null)
            {
                if (current.data > data)
                {
                    console.log(current.data);
                }
                current = current.next;
            }   
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------
let nuevolink = new LinkedList()

nuevolink.insert(1)
nuevolink.insert(2)
nuevolink.insert(3)
nuevolink.insert(5)
nuevolink.insert(6)
nuevolink.insert(7)

console.log(nuevolink.find(6));
console.log(nuevolink.find(7));
console.log(nuevolink.print());
console.log(nuevolink.numeroRepetido(6));
console.log(nuevolink.findMayor(6));









