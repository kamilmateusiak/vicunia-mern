import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default class Tracker extends React.Component {
    render() {
        return (
            <List>
                {
                    this.props.items.map((item) => <ListItem key={item.id} onClick={() => this.props.handleListItemClick(item)}>{item.name}</ListItem>)
                }
            </List>
        )
    } 
}
