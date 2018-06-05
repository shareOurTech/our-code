class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    pop() {
        return this.dataStore[--this.top];
    }
    push(data) {
        this.dataStore[this.top++] = data;
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    clear() {
        this.top = 0;
    }
    length() {
        return this.top;
    }
}
let s = new Stack();
s.push(2);
s.push(3);
console.log(s.pop());
console.log(s.peek());


