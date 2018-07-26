import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			message: "",
			result: ""
		};
	}

	handleKeyPress(e) {
		if (e.which === 13) {
			if (e.target.value != "") {
				this.setState({
					items: this.state.items.concat(e.target.value),
					message: ""
				});
				e.target.value = "";
			} else {
				this.setState({
					message: "You Don't have choice"
				});
			}
		}
	}

	handleLucky() {
		const { items } = this.state;
		this.setState({ message: "Finding best one for you..." });
		const wait = time => new Promise(resolve => setTimeout(resolve, time));

		wait(2000).then(() =>
			this.setState({
				result: Math.floor(Math.random() * items.length),
				message: ""
			})
		);
	}

	render() {
		const items = this.state.items.map(
			(item, i) =>
				i === this.state.result ? (
					<div key={i} className="form-group-item green">
						<p>{item}</p>
					</div>
				) : (
					<div key={i} className="form-group-item">
						<p>{item}</p>
					</div>
				)
		);
		return (
			<div className="container">
				<h1 className="heading">Pick me one!</h1>
				<div className="form-group">
					<input
						className="input"
						onKeyDown={e => this.handleKeyPress(e)}
					/>
					<label className="label">Enter Your Choice</label>
				</div>
				<div className="message">{this.state.message}</div>
				<div className="items">{items}</div>
				<div className="center">
					<input
						className="button"
						type="button"
						value="I'm Feeling Lucky!"
						onClick={() => this.handleLucky()}
					/>
				</div>
			</div>
		);
	}
}

export default App;
