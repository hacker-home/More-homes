import React from 'react';
import {shallow} from 'enzyme';
import ListEntry from '../client/src/components/ListEntry.jsx';

test('component of ListEntry', () => {
  const listEntry = shallow(<ListEntry/>)
});
