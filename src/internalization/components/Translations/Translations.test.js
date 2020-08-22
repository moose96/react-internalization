import React from 'react';
import { shallow } from 'enzyme';

import Translations from './Translations';

describe('test Translations component', () => {
  const translations = {
    'pl': {
      'test': 'abc'
    },
    'en': {
      'test': 'def'
    }
  };

  it('should render ok', () => {
    const output = ['pl', 'en'];
    const wrapper = shallow(
      <Translations translations={translations}>
        {(langID, index) => <p key={index}>{langID}</p>}
      </Translations>
    );

    const langs = wrapper.find('p');
    langs.children().forEach((element, index) => {
      expect(element.text()).toBe(output[index]);
    });
  })
});
