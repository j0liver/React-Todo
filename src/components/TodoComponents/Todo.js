import React from 'react';

const Item = props => {
  return (
    <div
      style={props.item.completed ? { textDecoration: 'line-through'} : {}}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;