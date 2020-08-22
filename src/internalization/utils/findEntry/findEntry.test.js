import findEntry from './findEntry';

describe('test findEntry', () => {
  const testObject = {
    MessageBox: {
      Yes: 'yes',
      No: 'no'
    },
    Wrapper: {
      Outer: {
        Inner: {
          key: 'value'
        }
      }
    }
  }
  it('should get value from object', () => {
    expect(findEntry(testObject, 'MessageBox.Yes')).toEqual('yes');
    expect(findEntry(testObject, 'Wrapper.Outer.Inner.key')).toEqual('value');
    expect(findEntry(testObject, 'MessageBox.NotExist')).toBeUndefined();
  })
});
