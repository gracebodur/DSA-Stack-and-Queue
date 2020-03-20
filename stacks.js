class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class _DoubleNode {
    constructor(value, previous, next) {
        this.value = value
        this.previous = previous
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function displayStack(stack) {
    console.log("===========")
    let node = stack.top
    while ( node != null) {
        console.log(node)
        node = node.next
    }
    
}

function peek(stack) { // allows you to look at the top of the stack without removing it
    return console.log(stack.top)
}

function isEmpty(stack) { // allows you to check if the stack is empty or not
    if (stack.top === null) {
        return true
    }
    return false
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    
    const forward = new Stack()
    const backward = new Stack()

    const arr = s.split('')
    const arrReverse = s.split('').reverse()

    for (let i = 0; i < arr.length; i++) {
        forward.push(arr[i])
    }
    for (let i = 0; i < arrReverse.length; i++) {
        backward.push(arrReverse[i])
    }
    //forward.top === null empty stack
    while (forward.top !== null) {
        if (forward.top.data !== backward.top.data) {
            return false
        }
        forward.top = forward.top.next
        backward.top = backward.top.next
    }
    return true
}

console.log(is_palindrome("dad"))
console.log(is_palindrome("A man, a plan, a canal: Panama"))
console.log(is_palindrome("1001"))
console.log(is_palindrome("Tauhida"))

function main() {
    const starTrekStack = new Stack()

    starTrekStack.push('Kirk')
    starTrekStack.push('Spock')
    starTrekStack.push('McCoy')
    starTrekStack.push('Scotty')
    peek(starTrekStack)
    console.log(isEmpty(starTrekStack))
    starTrekStack.pop()
    starTrekStack.pop()
    displayStack(starTrekStack)
}

main()

setTimeout(() => {}, 1000);