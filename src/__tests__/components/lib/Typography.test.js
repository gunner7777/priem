import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Typography from '../../../components/lib/Typography';

describe('<Typography />', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Typography
        variant="text"
        tag="p"
      >
        text
      </Typography>);
      expect(toJson(wrapper)).toMatchSnapshot();
    })
});