import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ListEntry from '../client/src/components/ListEntry';
configure({ adapter: new Adapter() });

test('component of ListEntry', () => {
  var obj = {
    id: 1,
    img: 'path.jpg',
    house_type: 'house',
    location: 'Berlin',
    description: 'sunny',
    cost_per_night: 250,
    rating: 1.2,
    votes: 4
  };
  const entry = shallow(<ListEntry entry={obj} key={obj.id} />);
  expect(entry.text()).not.toBeNull();
});
