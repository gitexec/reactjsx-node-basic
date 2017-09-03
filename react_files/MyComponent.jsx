import React from 'react'

class MyComponent extends React.Component {
  render() {
    let name = this.props.name;
    if(name == "Tim"){
      name = "favorite instructor";
    } else {
      name = "solid instructor"
    }
    const style = {color: "red"};
    return (
       <div>
        <p>{this.props.name}</p>
        <p>{name}</p>
        {
          name === "student" ?
          <h1> good job on course so far</h1>
          :
          <h1>Hello, {name}</h1>
        }
        <h1 style={style}>inline style</h1>
        <p className="primary-text"> stylesheet file</p>
       </div>
    );
  }
}

export default MyComponent;
