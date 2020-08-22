import React from 'react';
import { shallow } from 'enzyme';

import Internalization from './Internalization';

const translations = {
  'en': {
    'key1': 'abc',
    'key2': 'def'
  }
}

describe('test Internalization provider', () => {
  it('should render children components', () => {
    const wrapper = shallow(
      <Internalization data={translations} lang='en'>
        <h1>Hello</h1>
      </Internalization>
    );

    expect(wrapper.find('h1')).toBeDefined();
  })
});
