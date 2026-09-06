import Node from './node.js';

export default class LinkedList {
  #head = null;

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return this;
    }

    this.#getFinalNode().nextNode = new Node(value);
    return this;
  }

  prepend(value) {
    this.#head = new Node(value).setNext(this.#head);
    return this;
  }

  size() {
    let count = 0;
    const finalNode = this.#getFinalNode(() => count++);

    return count + (finalNode ? 1 : 0);
  }

  head() {
    if (this.#head === null) {
      return undefined;
    }
    return this.#head.value;
  }

  tail() {
    return this.#getFinalNode()?.value || undefined;
  }

  at(index) {
    let i = 0;
    let currentNode = this.#head;
    while (currentNode !== null) {
      if (i === index) {
        return currentNode.value;
      }
      i += 1;
      currentNode = currentNode.nextNode;
    }
    return undefined;
  }

  pop() {
    if (this.#head === null) {
      return undefined;
    }

    const previousHead = this.#head;
    this.#head = this.#head.nextNode;

    return previousHead.value;
  }

  contains(value) {
    return this.findIndex(value) !== -1;
  }

  findIndex(value) {
    let currentNode = this.#head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      index += 1;
      currentNode = currentNode.nextNode;
    }
    return -1;
  }

  toString() {
    let string = '';
    if (this.#head === null) {
      return string;
    }

    let currentNode = this.#head;
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += 'null';

    return string;
  }

  #getFinalNode(iterationCallback) {
    if (this.#head === null) return null;

    let currentNode = this.#head;
    while (currentNode.nextNode !== null) {
      if (iterationCallback) iterationCallback();
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
}
