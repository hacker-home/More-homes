import React from 'react';
import ListEntry from './ListEntry.jsx';

var ListOfHomes = ({ data }) => {
  return (
    <div className="flex-container">
      {data.map((entry) => <ListEntry entry={entry} key={entry.id} />)}
    </div>
  );
}

export default ListOfHomes;