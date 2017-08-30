import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default function TrackerList(props) {
  return (
    <List>
      {
        props.items.map((item) => <ListItem key={item['_id']} onClick={() => props.handleListItemClick(item)}>{item.name}</ListItem>)
      }
    </List>
  );
}

TrackerList.propTypes = {
  handleListItemClick: React.PropTypes.func,
  items: React.PropTypes.array,
};
