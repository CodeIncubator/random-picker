import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			message: '',
			result: ''
		};
	}

	handleKeyPress(e) {
		if (e.which === 13) {
<<<<<<< HEAD
			if (e.target.value != '') {
=======
			if (e.target.value !== "") {
>>>>>>> c3f17b39dea9615ef39b1cee26af5217ff747d4f
				if(this.state.items.length === 10){
					this.setMessage('You have reached your limit!');
				}else{
					this.setState({
						items: this.state.items.concat(e.target.value),
						message: ''
					});
					e.target.value = '';
				}
			} else {
				this.setMessage('You Dont have choices?');
			}
		}
	}

	handleRemoveItem(key){
		console.log(key);
		this.setState({
			items : this.state.items.filter((_, i) => i !== key)
		});
	}

	handleLucky() {
		const { items } = this.state;
		if(items.length === 0){
			this.setMessage('You Dont have choices?');
		}else{
			this.setMessage('Finding best one for you...');
			const wait = time => new Promise(resolve => setTimeout(resolve, time));

			wait(2000).then(() =>
				this.setState({
					result: Math.floor(Math.random() * items.length),
					message: ''
				})
			);
		}
	}

	setMessage(message){
		this.setState({ message: message });
	}

	handleClear () {
		this.setState({
			items: [],
			message: '',
			result: ''
		});
	}

	render() {
		const items = this.state.items.map(
			(item, i) =>
				i === this.state.result ? (
					<div key={i} className="form-group-item green">
						<div>
							<p>{item}</p>
						</div>
					</div>
				) : (
					<div key={i} className="form-group-item p-rel">
						<div>
							<p>{item}</p>
						</div>
<<<<<<< HEAD
						<div>
							<a 
								className="clear button alert" 
								href="javascript:void(0);"
								onClick={() => this.handleRemoveItem(i)}
							>
									Remove
							</a>
=======
						<div className="removeBtnWrapper" onClick={() => this.handleRemoveItem(i)}>
							<a className="clear button alert no-pad">X</a>
>>>>>>> c3f17b39dea9615ef39b1cee26af5217ff747d4f
						</div>
					</div>
				)
		);
		return (
			<div className="container">
				<h1 className="heading">Random Picker</h1>
				<div className="form-group">
					<input
<<<<<<< HEAD
						className="input text-center" 
						placeholder="Enter your choices"
						onKeyDown={e => this.handleKeyPress(e)} 
						autoFocus
=======
						className="input"
						placeholder="Enter your choices"
						onKeyDown={e => this.handleKeyPress(e)}
						style={{textAlign: "center"}}
>>>>>>> c3f17b39dea9615ef39b1cee26af5217ff747d4f
					/>
				</div>
				<div className="message"></div>
				{
					this.state.message && <div className="callout primary message">
						<p>{this.state.message}</p>
					</div>
				}
				<div className="items">{items}</div>
				<div className="center">
					<button type="button" className="secondary button large" onClick={() => this.handleClear()}>Clear</button>
					<button type="button" className="success button large" onClick={() => this.handleLucky()}>Find My Choice</button>
				</div>
			</div>
		);
	}
}

export default App;