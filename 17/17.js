class Node {
    constructor(data) {
        this.data = data
        this.left = null // this.next
        this.right = null // this.next2
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root
    }
    
    // metodos...
    insert(data) {
        let node = new Node(data)
        
        if(this.root == null) {
            this.root = node
        } else {
            let current = this.root
            
            // node = new Node(87)
            
            // Explorar el árbol
            while(true) {
            
                // current.right = N(84) && 84 < 87
                if(current.right != null && current.data < node.data) {
                    current = current.right
                } else if (current.left != null && current.data > node.data) {
                    current = current.left
                } else {
                    break
                }
                
                //if(current.right == null || current.left == null) {
                //    break
                //}
            }


            // Llegamos a nuestro destino y asignamos
            if(current.right == null && current.data < node.data) {
                current.right = node
            } else if (current.left == null && current.data > node.data) {
                current.left = node
            }
            
            // this.root.data < node.data
            // true:
            //  right = node 
            // false:
            //  left = node  
            
        }
    } 
    
    search(data) {
        if(this.root.data == data) {
            return this.root
        } else {
            let current = this.root

            while(true) {
                // current = N(14) 
                if(current.right != null && current.data < data) {
                    current = current.right
                } else if (current.left != null && current.data > data) {
                    current = current.left
                } else {
                    break
                }
            }
        
            return current
        }
    }
}