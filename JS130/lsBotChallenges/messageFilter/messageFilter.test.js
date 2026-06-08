// message_filter.test.js

const MessageFilter = require('./messageFilter');

describe('MessageFilter', () => {
  test('creates an instance with a public name property', () => {
    const filter = new MessageFilter('basic', ['bad', 'mean']);

    expect(filter.name).toBe('basic');
  });

  test('does not expose blocked words as a public property', () => {
    const filter = new MessageFilter('basic', ['bad', 'mean']);

    expect(filter.blockedWords).toBeUndefined();
    expect('blockedWords' in filter).toBe(false);
  });

  test('has a maskWord function on the class', () => {
    expect(MessageFilter.maskWord).toBeDefined();
    expect(typeof MessageFilter.maskWord).toBe('function');
  });

  test('maskWord returns asterisks matching the length of a word', () => {
    expect(MessageFilter.maskWord('bad')).toBe('***');
    expect(MessageFilter.maskWord('terrible')).toBe('********');
    expect(MessageFilter.maskWord('x')).toBe('*');
  });

  test('filters a message with one blocked word', () => {
    const filter = new MessageFilter('basic', ['bad']);

    expect(filter.filter('this is bad')).toBe('this is ***');
  });

  test('filters a message with multiple blocked words', () => {
    const filter = new MessageFilter('basic', ['bad', 'mean']);

    expect(filter.filter('bad people are mean')).toBe('*** people are ****');
  });

  test('does not filter partial word matches', () => {
    const filter = new MessageFilter('basic', ['bad']);

    expect(filter.filter('badly written but bad')).toBe('badly written but ***');
  });

  test('matching is case-sensitive', () => {
    const filter = new MessageFilter('basic', ['bad']);

    expect(filter.filter('Bad bad BAD')).toBe('Bad *** BAD');
  });

  test('filtered getter returns the filtered version of the most recent message', () => {
    const filter = new MessageFilter('basic', ['bad']);

    filter.filter('this is bad');

    expect(filter.filtered).toBe('this is ***');
  });

  test('filtered getter updates after filtering a new message', () => {
    const filter = new MessageFilter('basic', ['bad', 'mean']);

    filter.filter('bad example');
    expect(filter.filtered).toBe('*** example');

    filter.filter('mean example');
    expect(filter.filtered).toBe('**** example');
  });

  test('most recent raw message is not exposed as a public property', () => {
    const filter = new MessageFilter('basic', ['bad']);

    filter.filter('this is bad');

    expect(filter.message).toBeUndefined();
    expect('message' in filter).toBe(false);
  });
});