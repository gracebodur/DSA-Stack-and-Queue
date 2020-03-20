## DSA Stack and Queue

### Stacks (Data Structure)
- A stack is a special type of structure that can be used to maintain data in an organized way.
- This data structure is commonly implemented in one of two ways: as an array or as a linked list.
- In either case, the important rule is that when data is added to the stack, it sits "on top", and so if an element needs to be removed, the most recently added element is the only element that can legally removed.
- LIFO structure- Last in, first out.
  
**There are only two operations that may legally be performed on a stack**

***Push***
add a new element to the top of the stack

***Pop***
Remove the most recently-added element from the top of the stack

**Array-based implementation**
In general case, push() needs to:
- Accept a pointer to the stack.
- Accept data of type VALUE to be added to the stack.
- Add that data to the top of the stack.
- Change the location of the top of the stack.

In general case, pop() needs to:
- Accept a pointer to the stack.
- Change the location of the top of the stack.
- Return the value that was removed from the stack.
  
**Linked list-based implementation**
- Just make sure to always maintain a pointer to the head of the linked list.
- To push, dynamically allocated a new node, set its next pointer to point to the current head of the list, then move the head pointer to the newly-created node.
- To pop, traverse the linked list to its second element(if it exists), free the head of the list, then move the head pointer to the (former) second element.

ex. browser history, undo or redo, store prev state 


### QUEUE (Abstract Data Type)
- Models the idea of waiting in line.
- Enqueue - adding an element at the back or tail of the queue
- Dequeue - removing the first or head element from the queue
- FIFO structure - First in, First out.

##### Queue Uses
- Simulating waiting lines
- Buffers for I/O
- Print Queue
- Keyboard strokes
- Video Frames


// Stacks

//top and bottom
// Arrays alllows cache locality makes it faster to access item bec theyre right next to each other
// Linked Lists more dynamic memory

//Queues
// Arrays dont build it with array arrays have indexes associated with them, shift indexes 0(n)
// Linked Lists ptr to head and ptr to tail




Reference:

[Stacks by Harvard CS50](https://www.youtube.com/watch?v=9Tp8wHD66lw)