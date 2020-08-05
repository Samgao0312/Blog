class Stack {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    push(item) {
        this.data.push(item);
        this.length++;
    }

    pop() {
        let item = this.data.splice(this.length-1, 1);
        this.length--;

        return item;
    }

    peek() {
        return this.data[this.length - 1];
    }

    toString() {
        return this.data;
    }

    clear() {
        this.data = [];
        this.length = 0;
    }
}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
console.log(st.length);
console.log(st.peek());
console.log(st.length);
console.log(st.pop());
console.log(st.length);
console.log(st.toString());