import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


const Body = props => <p className="App-intro"> {props.text} </p>

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> {this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{this.props.myObj.name}</div>
        <div>{this.props.myObj.address}</div>
        {/* for array */}
        <div>{this.props.myArr[0]}</div>
        {/* for function */}
        <div>{this.props.myFunc(10, 29)}</div>
        {/* if you want to display whole obj you can use this syntax
      <div>{JSON.stringify(this.props.myObj)}</div> */}

      </header>
    )
  }
}


function App() {
  const add = (a, b) => a + b;
  return (

    <div className="App">
      <Header title={"this is the class commponent pass the data"}
        num={5}
        myObj={{
          name: "Rinkarto",
          address: "Denver"
        }}
        myArr={[1, 2, 3, 4, 5]}
        myFunc={add}
      />
      <Body text="this is the functional component" />
    </div>
  );
}

export default App;



// look at that i add asyn fect example App1 component as am example