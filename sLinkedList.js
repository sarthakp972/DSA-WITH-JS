
class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}


class LinkedList {
    constructor() {
        this.head = null; 
    }

    
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; 
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; 
            }
            current.next = newNode; 
        }
    }

   
    display() {
        let result = "";
        let current = this.head; 
        while (current !== null) {
            result += current.data + " -> "; 
            current = current.next; 
        }
        result += "null"; 
        console.log(result); 
    }

   
}


const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);


console.log("Linked List:");
list.display(); 


