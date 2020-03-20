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

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }
        //make the new node the last item on the queue
        this.last = node
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return
       }
       const node = this.first
       this.first = this.first.next
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null
       }
       return node.value
   }
}

class DoubleQueue {
    constructor() {
        this.first = null
        this.last = null
        this.previous = previous
    }

    enqueue(data) {
        let node

        if (this.first === null) {
            node = new _DoubleNode(data, null, null)
            this.first = node
        }

        if (this.last) {
            node = new _DoubleNode(data, this.last, null);
            this.last.next = node
        }
        this.last = node
    }

    dequeue() {
       if (this.first === null) {
           return;
       }
       const node = this.first
       this.first = this.first.next
       // this.first.previous = null

       if (node === this.last) {
           this.last = null
       }
       return node.value
   }
}

function displayQueue(queue) {
    console.log("===========")
    let node = queue.first
    while ( node != null) {
        console.log(node)
        node = node.next
    }
}

function peekQueue(queue) {
    return queue.first
}

function isEmptyQueue(queue) { // allows you to check if the queue is empty or not
    if (queue.first === null) {
        return true
    }
    return false
}

// function squareDance() {
    // male dancers
    // female dancers
    // genders
    // names/value

//     const femaleDancers = new Queue()
//     const maleDancers = new Queue()

//     dancers ({value:'Jane', gender: 'F'})
//     dancers ({value: 'Frank', gender: 'M'})
//     dancers ({value: 'Madonna', gender: 'F'})
//     dancers ({value: 'John', gender: 'M'})
//     dancers ({value: 'Beyonce', gender: 'F'})
//     dancers ({value: 'Sherlock', gender: 'M'})
//     dancers ({value: 'David', gender: 'M'})
//     dancers ({value: 'Christopher', gender: 'M'})

//     pair (maleDancers, femaleDancers)

//     function pair(M, F) {
//         while(!isEmptyQueue(M) && !isEmptyQueue(F)) {
//             MPerson = M.dequeue()
//             FPerson = F.dequeue()
//             console.log(MPerson + ' and ' + FPerson)
//         }
//     }

//     function dancers(person) {
//         if(person.gender === 'M') {
//             maleDancers.enqueue(person.value)
//         }
//         if (person.gender === 'F') {
//             femaleDancers.enqueue(person.value)
//         }
//     }
// }

// squareDance()

function queue() {

    const starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    console.log(peekQueue(starTrekQ))
    console.log(isEmptyQueue(starTrekQ))
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    displayQueue(starTrekQ)
    console.log(peekQueue(starTrekQ))
}

queue()

setTimeout(() => {}, 1000);