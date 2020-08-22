import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';

import Internalization from '../Internalization';
import Tr from './Tr';

const translations = {
  'en': {
    'test': 'hello'
  }
}

describe('test Tr consumer', () => {
  it('should render given component', () => {
    const components = (
      <Internalization data={translations} lang="en">
        <Tr component={<h1>a</h1>} iKey='test' />
      </Internalization>
    );

    const snapshot = TestRenderer
      .create(components)
      .toJSON();

    expect(snapshot).toMatchSnapshot();

    const wrapper = shallow(components);
    expect(wrapper.html()).toEqual('<h1>hello</h1>');
  });

  it('should render default component', () => {
    const wrapper = shallow(
      <Internalization data={translations} lang="en">
        <Tr component={<p>default</p>} iKey="notexist" />
      </Internalization>
    );

    expect(wrapper.html()).toEqual('<p>default</p>');
  })

  it('should render component with props', () => {
    const wrapper = shallow(
      <Internalization data={translations} lang="en">
        <Tr component={<a>default</a>} iKey="test" href="/test" />
      </Internalization>
    );

    expect(wrapper.html()).toEqual('<a href="/test">hello</a>');
  })
});
