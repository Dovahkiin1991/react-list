import React, { Component } from 'react';
import { Button, Card, Row, Col, Collapsible, CollapsibleItem, Input } from 'react-materialize';
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
    this.state = {
      name: '',
      text: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({name: event.target.value});
  }
  handleTextareaChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    //get last id value, and increment it
    const id = listArr[listArr.length-1].id + 1;
    listArr.push({"name":this.state.name,"id":id,"icon":"place","text":this.state.text});
    console.log(listArr);

    // clear fields
    // this.state.name = "";
    // this.state.text = "";
    this.setState = {
      name: '',
      text: ''
    };

    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" label="Enter new title" value={this.state.name} onChange={this.handleInputChange} />
        <Input type='textarea' label="Enter new description" value={this.state.text} onChange={this.handleTextareaChange} />
        <Button waves='orange'>Add</Button>
      </form>
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
