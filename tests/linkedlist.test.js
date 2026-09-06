import { test, describe, expect } from '@jest/globals';
import LinkedList from '../src/linkedlist.js';

let linkedList;

function createEmptyList() {
  return new LinkedList();
}

function createPopulatedList() {
  return new LinkedList().append('apple').append('cauliflower').append('beet');
}

describe('toString method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.toString()).toBe('');
  });

  test('populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.toString()).toBe(
      '( apple ) -> ( cauliflower ) -> ( beet ) -> null',
    );
  });
});

describe('append method', () => {
  test('string to empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.append('onion').toString()).toBe('( onion ) -> null');
  });

  test('number to empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.append(7).toString()).toBe('( 7 ) -> null');
  });

  test('to populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.append('onion').toString()).toBe(
      '( apple ) -> ( cauliflower ) -> ( beet ) -> ( onion ) -> null',
    );
  });
});

describe('prepend method', () => {
  test('string to empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.prepend('onion').toString()).toBe('( onion ) -> null');
  });

  test('number to empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.prepend(7).toString()).toBe('( 7 ) -> null');
  });

  test('to populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.prepend('onion').toString()).toBe(
      '( onion ) -> ( apple ) -> ( cauliflower ) -> ( beet ) -> null',
    );
  });
});

describe('size method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.size()).toBe(0);
  });

  test('populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.size()).toBe(3);
  });
});

describe('head method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.head()).toBe(undefined);
  });

  test('populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.head()).toBe('apple');
  });
});

describe('tail method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.tail()).toBe(undefined);
  });

  test('populated list', () => {
    linkedList = createPopulatedList();
    expect(linkedList.tail()).toBe('beet');
  });
});

describe('at method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.at(0)).toBe(undefined);
  });

  test('first valid index', () => {
    linkedList = createPopulatedList();
    expect(linkedList.at(0)).toBe('apple');
  });

  test('last valid index', () => {
    linkedList = createPopulatedList();
    expect(linkedList.at(2)).toBe('beet');
  });

  test('invalid index', () => {
    linkedList = createPopulatedList();
    expect(linkedList.at(3)).toBe(undefined);
  });
});

describe('pop method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.pop()).toBe(undefined);
    expect(linkedList.size()).toBe(0);
  });

  test('list with only one value', () => {
    linkedList = createEmptyList().append('onion');
    expect(linkedList.pop()).toBe('onion');
    expect(linkedList.size()).toBe(0);
  });

  test('list with multiple values', () => {
    linkedList = createPopulatedList();
    expect(linkedList.pop(0)).toBe('apple');
    expect(linkedList.size()).toBe(2);
  });
});

describe('contains method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.contains('apple')).toBe(false);
  });

  test('value not present', () => {
    linkedList = createPopulatedList();
    expect(linkedList.contains('onion')).toBe(false);
  });

  test('value present in head', () => {
    linkedList = createPopulatedList();
    expect(linkedList.contains('apple')).toBe(true);
  });

  test('value present in middle', () => {
    linkedList = createPopulatedList();
    expect(linkedList.contains('cauliflower')).toBe(true);
  });

  test('value present in tail', () => {
    linkedList = createPopulatedList();
    expect(linkedList.contains('beet')).toBe(true);
  });
});

describe('findIndex method', () => {
  test('empty list', () => {
    linkedList = createEmptyList();
    expect(linkedList.findIndex('apple')).toBe(-1);
  });

  test('value not present', () => {
    linkedList = createPopulatedList();
    expect(linkedList.findIndex('onion')).toBe(-1);
  });

  test('value present in head', () => {
    linkedList = createPopulatedList();
    expect(linkedList.findIndex('apple')).toBe(0);
  });

  test('value present in middle', () => {
    linkedList = createPopulatedList();
    expect(linkedList.findIndex('cauliflower')).toBe(1);
  });

  test('value present in tail', () => {
    linkedList = createPopulatedList();
    expect(linkedList.findIndex('beet')).toBe(2);
  });

  test('value appears multiple times', () => {
    linkedList = createPopulatedList().append('cauliflower');
    expect(linkedList.findIndex('cauliflower')).toBe(1);
  });
});
