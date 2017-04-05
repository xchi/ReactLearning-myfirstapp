import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user){
  return user.firstName+" "+user.lastName;
}
const user={
  firstName: 'Vivian',
  lastName: 'Chi'
}
function getGreeting(user) {
  if (user) {
    return <h1>HelloHello, {formatName(user)}!</h1>;
  }
  return <h1>HelloHello, Stranger.</h1>;
}
function tick(){
  const element=(
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()} </h2>
    </div>
  )

ReactDOM.render(
  element,
  document.getElementById('root')
);
}


class Welcome extends React.Component{
  render(){
    return <h1> Welcome {this.props.firstName+" "+this.props.lastName}</h1>;
  }
}

class MultiWelcome extends React.Component{
  render(){
    const result=(
      <div>
        <Welcome firstName="Sara" lastName="Chi"/>
        <Welcome firstName="Jack" lastName="Li"/>
        <Welcome firstName="Aaron" lastName="Lu"/>
      </div>
    );
    return result;
  }
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
        <div className="UserInfo-name">
          {props.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  );
}

const element=<Comment avatarUrl="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" name="Vivian" text="comment placeholders"/>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
