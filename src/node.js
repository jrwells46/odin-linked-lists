export default class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }

  setNext(nextNode) {
    this.nextNode = nextNode;
    return this;
  }
}
