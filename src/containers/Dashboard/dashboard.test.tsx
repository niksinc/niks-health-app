import { shallow } from 'enzyme';
import * as React from 'react';
import CheckboxWithLabel from './Dashboard';
// TODO: add more tests
test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel />);

  // Interaction demo
  // expect(checkbox.text()).toEqual('Off');
  // checkbox.find('input').simulate('change');
  // expect(checkbox.text()).toEqual('On');

  // Snapshot demo
  expect(checkbox).toMatchSnapshot();
});
