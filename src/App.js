import React, { Component } from 'react';
import './App.css';
const listArr = [
  {name: "John", id: 120, icon: "filter_drama", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la"},
  {name: "Beth", id: 443, icon: "place", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "},
  {name: "Jane", id: 510, icon: "whatshot", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
 ];

function InputItem(props) {
  return <input type="text" placeholder="Enter new item" value="" />; 
}
class renderList extends Component {
  render() {
    return (
      <div className="container">
        <InputItem />
        <ul className="collapsible">
            {
              listArr.map(function(user, i){
                return <li key={i}>
                  <div className="collapsible-header"><i className="material-icons">{user.icon}</i>{user.name}</div>
                  <div className="collapsible-body"><span>{user.text}</span></div>
                </li>;
              })
            }
        </ul>
      </div>
    );
  }
}

export default renderList;
