class Node {
  constructor(data, next) {
    this.data = data;
    this.nextValue = next;
  }
  get value() {
    return this.data;
  }
  get next() {
    return this.nextValue;
  }

  set changeNext(nextNode) {
    this.nextValue = nextNode;
  }
}

class Linkedlist {
  constructor(firstNode) {
    this.head = new Node(firstNode, null);
    this.temp = null;
    this.current = null;
  }

  append(value) {
    this.current = this.head;
    while (this.current.next != null) {
      this.current = this.current.next;
    }
    this.current.changeNext = new Node(value, null);
    this.current = null;
  }

  prepend(value) {
    this.current = new Node(value, this.head);
    this.head = this.current;
  }

  size() {
    this.current = this.head;
    let i = 0;
    while (this.current.next != null) {
      this.current = this.current.next;
      i++;
    }
    this.current = null;
    return i;
  }

  head() {
    return this.head;
  }

  tail() {
    this.current = this.head;
    while (this.current.next != null) {
      this.current = this.current.next;
    }
    return this.current;
  }

  at(index) {
    this.current = this.head;
    let current = this.current;
    if (index > this.size()) {
      return;
    }
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  shift() {
    this.current = this.head;
    this.head = this.current.next;
  }
  pop() {
    this.current = this.head;
    while (this.current.next != null) {
      this.temp = this.current;
      this.current = this.current.next;
    }
    this.temp.changeNext = null;
  }

  contains(value) {
    this.current = this.head;
    while (this.current.next != null) {
      if (this.current.value == value) {
        return true;
      }
      this.current = this.current.next;
    }
    return false;
  }

  find(value) {
    this.current = this.head;
    let current = this.current;
    for (let i = 0; i <= this.size(); i++) {
      if (current.value == value) {
        return i;
      }
      current = current.next;
    }
    return null;
  }

  insertAt(value, index) {
    this.current = this.head;
    let current = this.current;
    if (index > this.size()) {
      console.log("index outside the list");
      return;
    }
    if (index == this.size()) {
      this.append(value);
      return;
    }
    if (index == 0) {
      this.prepend(value);
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    this.temp = new Node(value, current.next);
    current.changeNext = this.temp;
    this.temp = null;
  }

  removeAt(index) {
    this.current = this.head;
    let current = this.current;
    if (index == 0) {
      this.shift();
      return;
    }
    if (index == this.size()) {
      this.pop();
      return;
    }
    if (index > this.size()) {
      console.log("index outside the list");
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    this.temp = current.next;
    current.changeNext = this.temp.next;
  }

  toString() {
    this.current = this.head;
    console.log(this.current);
    let output = "";
    while (this.current.next != null) {
      output = `${output}(${this.current.value}) -> `;
      this.current = this.current.next;
    }
    output = `${output}(${this.current.value})`;
    return output;
  }
}

let lista = new Linkedlist("test0");

for (let i = 0; i < 10; i++) {
  lista.append(`test${i + 1}`);
}
console.log(lista.size());
console.log("----------------------Init-------------------------");
console.log(lista.toString());
console.log("----------------------check 1-------------------------");
console.log(lista.head, lista.tail(), lista.at(10), lista.size());
console.log("------------------------check remove-----------------------");
lista.removeAt(5);
lista.removeAt(lista.size());
lista.removeAt(1);
lista.removeAt(0);
console.log(lista.toString());
console.log("----------------------check insert-------------------------");
lista.insertAt("insertado en 0", 0);
lista.insertAt("insertado en 4", 4);
lista.insertAt("insertado en el final", lista.size());
console.log(lista.toString());
console.log("--------------------check find---------------------------");
for (let i = 0; i <= lista.size(); i++) {
  console.log(lista.find(`test${i}`), `test${i}`);
}
console.log(lista.find("insertado en 0"), "insertado en 0");
console.log(lista.find("insertado en 4"), "insertado en 4");
console.log(lista.find("insertado en el final"), "insertado en el final");
console.log("-----------------------check test------------------------");
for (let i = 0; i <= lista.size(); i++) {
  console.log(lista.contains(`test${i}`), `test${i}`);
}
console.log(lista.contains("insertado en 0"), "insertado en 0");
console.log(lista.contains("insertado en 4"), "insertado en 4");
console.log(lista.contains("insertado en el final"), "insertado en el final");
console.log("--------------------check pop---------------------------");
lista.pop();
console.log(lista.toString());
console.log("--------------------check preprend---------------------------");
lista.prepend("test-1");
console.log(lista.toString());
console.log("--------------------check 2---------------------------");
console.log(lista.head, lista.tail(), lista.at(8), lista.size());
