class Queue {
    constructor(len)
    {
        this.items = [];
        this.length = len;
        this.position = 0;
    }

    enqueue(element)
    {
        if(this.position < this.length) {
            this.position++;
            this.items.push(element);
            return this;
        }
        else {
            return 'Queue Overflow';
        }

    }

    dequeue()
    {
        if (this.position == 0) {
            return 'Queue Underflow'
        }
        else {
            this.position--;
            this.items.shift();
            return this;
        }
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }


    isEmpty()
    {
        return this.items.length == 0;
    }
}


let queue = new Queue(5);
console.log(queue);
console.log(queue.isEmpty()); 
console.log(queue.dequeue());
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.dequeue());
console.log(queue.enqueue(40));
console.log(queue.enqueue(50));
console.log(queue.enqueue(60));
console.log(queue.dequeue());
console.log(queue.enqueue(70));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
