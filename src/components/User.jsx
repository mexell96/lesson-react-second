import React from "react";

function User(props) {
  const { description, id, link, query } = props;
  return (
    <li>
      <div className="green">ID: {id}</div>
      <div className="yellow">Description: {description}</div>
      <div className="mediumslateblue">
        <a href={link}>Link to {link}</a>
      </div>
      <div className="orange">Query: {query}</div>
      <button onClick={props.onDelete}>Delete this user</button>
    </li>
  );
}
export default User;
