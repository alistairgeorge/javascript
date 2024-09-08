class CircularQueue {
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
            this.items.shift();
            this.items.push(element);
            return this;
        }
    }

    dequeue()
    {
        if (this.position == 0) {
            return 'Current Queue Underflow'
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


let circularqueue = new CircularQueue(5);
console.log(circularqueue);
console.log(circularqueue.isEmpty()); 
console.log(circularqueue.dequeue());
console.log(circularqueue.enqueue(10));
console.log(circularqueue.enqueue(20));
console.log(circularqueue.enqueue(30));
console.log(circularqueue.dequeue());
console.log(circularqueue.enqueue(40));
console.log(circularqueue.enqueue(50));
console.log(circularqueue.enqueue(60));
console.log(circularqueue.enqueue(600));
console.log(circularqueue.enqueue(80));
console.log(circularqueue.enqueue(90));
console.log(circularqueue.dequeue());
console.log(circularqueue.enqueue(70));
console.log(circularqueue.enqueue(150));
console.log(circularqueue.enqueue(130));
console.log(circularqueue.enqueue(140));
console.log(circularqueue.dequeue());
console.log(circularqueue.enqueue(110));
console.log(circularqueue.enqueue(170));
console.log(circularqueue.dequeue());
console.log(circularqueue.dequeue());
console.log(circularqueue.enqueue(100));
console.log(circularqueue.dequeue());
console.log(circularqueue.dequeue());
console.log(circularqueue.dequeue());
