class Stack {
    constructor(len)
    {
        this.items = [];
        this.length = len;
        this.position = 0;
    }

    push(element)
    {
        if(this.position < this.length) {
            this.position++;
            this.items.push(element);
            return this;
        }
        else {
            return 'Stack overflow';
        }

    }

    pop()
    {
        if (this.position == 0) {
            return 'Underflow'
        }
        else {
            this.position--;
            this.items.pop();
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


let stack = new Stack(5);
console.log(stack);
console.log(stack.isEmpty()); 
console.log(stack.pop());
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.push(40));
console.log(stack.push(50));
console.log(stack.push(60));
console.log(stack.pop());
console.log(stack.push(70));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
