import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListEntry from '../client/src/components/ListEntry';
import StarRating from '../client/src/components/StarRating';
import ListOfHomes from '../client/src/components/ListOfHomes';
configure({ adapter: new Adapter() });

const testEntry = {
  id: 1,
  img: 'path.jpg',
  house_type: 'house',
  location: 'Berlin',
  description: 'sunny',
  cost_per_night: 250,
  rating: 1.2,
  votes: 4
};

it('render ListEntry correctly', () => {
  const tree = renderer
    .create(<ListEntry entry={testEntry} key={testEntry.id} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render StarRating correctly', () => {
  const tree = renderer
    .create(<StarRating rating={testEntry.rating} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render ListOfHomes correctly', () => {
  const tree = renderer
    .create(<ListOfHomes data={[testEntry]} height={720} width={1150} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('component of ListEntry', () => {
  const entry = shallow(<ListEntry entry={testEntry} key={testEntry.id} />);
  expect(entry.text()).not.toBeNull();
});
