import React from 'react';

type Props = {
  value: string
}

function TodoItem(props: Props) {
  return (
    <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{props.value}</label>
      <button className="destroy" />
    </div>
  </li>
  )
}

export default TodoItem