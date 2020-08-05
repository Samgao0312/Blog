class List {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    append(item) {
        this.data.push(item);
        this.length++;
    }

    toString() {
        return this.data.join();
    }

    clear() {
        this.data = [];
        this.length = 0;
    }

    
}

let list = new List();
list.append('1');
list.append('2');
console.log(list.length);
console.log(list.toString());