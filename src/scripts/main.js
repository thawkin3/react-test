import React from 'react';
import ReactDOM from 'react-dom';

import style from '../styles/main.scss';

const Header = (props) => {
	return (
		<h1 className={props.theClass}>Hello World in {props.theColor}</h1>
	);
}

const Button = (props) => {
	return (
		<input type="button" value={props.myVal} onClick={props.clickHandler } />
	);
}

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			classValue: "ocean",
			colorValue: "blue"
		}
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick () {
		this.setState(function(prevState, props) {
		  let newValue = prevState.classValue === "ocean" ? "grass" : "ocean";
		  let newColor = prevState.colorValue === "blue" ? "green" : "blue";
		  return {
		    classValue: newValue,
		    colorValue: newColor
		  };
		});
	};

	render () {
		return (
			<div>
				<Header theClass={this.state.classValue} theColor={this.state.colorValue} />
				<Button myVal="Click me!" clickHandler={this.handleClick} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));