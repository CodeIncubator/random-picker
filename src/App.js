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
			if (e.target.value !== '') {
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
						<div className='removeIcon'>
							<a 
								className="clear button alert" 
								href="javascript:void(0);"
								onClick={() => this.handleRemoveItem(i)}
							>
								X
							</a>
						</div>
					</div>
				)
		);
		return (
			<div className="container">
				<h1 className="heading">Random Picker</h1>
				<div className="form-group">
					<input
						className="input text-center"
						placeholder="Enter your choices"
						onKeyDown={e => this.handleKeyPress(e)}
						autoFocus
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
