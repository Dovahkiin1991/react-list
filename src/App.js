import React, { Component } from 'react';
import { Button, Card, Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
// import $ from 'jquery'; 
import './App.css';

const listArr = [
  {name: "John", id: 120, icon: "filter_drama", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la"},
  {name: "Beth", id: 443, icon: "place", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "},
  {name: "Jane", id: 510, icon: "whatshot", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
 ];

class InputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('test')
  }
  render() {
    return (
    <input type="text" placeholder="Enter new item" value={this.state.value} onSubmit={this.handleSubmit} />
    ); 
  }
}
class renderList extends Component {
  render() {
    return (
      <div className="container">
        <InputItem />
        <Collapsible>
        {
          listArr.map(function(user, i){
            var status = (i === 0) ? 'active' : ''; 
            return <CollapsibleItem key={i} className={status} header={user.name} icon={user.icon}>
              {user.text}
            </CollapsibleItem>;
          })
        }
        </Collapsible>
      </div>
    );
  }
}

export default renderList;
