import { Component } from 'react';

export default class StockRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: '',
			amount: ''
		}

		this.handleTickerChange = this.handleTickerChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
	}

	handleTickerChange(event) {
		this.setState({
			ticker: event.target.value
		})
	}

	handleAmountChange(event) {
		this.setState({
			amount: event.target.value
		})
	}

	render() {
		var cardTitle = 
			<div className="uk-card-header">
				<h5 className="uk-card-title">Stock Info</h5>
			</div>;

		var tickerInput = 
			<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input className="mdl-textfield__input" 
					   type="text" 
					   id="ticker" 
					   value={this.state.value} 
					   onChange={this.handleTickerChange} />
				<label className="mdl-textfield__label" htmlFor="ticker">Stock Ticker</label>
			</div>;

		var amountInput = 
			<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input className="mdl-textfield__input" 
					   type="text" 
					   pattern="-?[0-9]*(\.[0-9]+)?" 
					   id="amount" 
					   value={this.state.amount}
					   onChange={this.handleAmountChange} />
				<label className="mdl-textfield__label" htmlFor="amount">Investment Amount</label>
				<span className="mdl-textfield__error">Enter a valid number</span>
			</div>;

		return (
			<div className="uk-card uk-card-small uk-card-body uk-card-primary uk-card-hover">
				{cardTitle}
				<div className="uk-card-body">
					<form>
						{tickerInput}
						{amountInput}	
					</form>
				</div>
				<div className="uk-card-footer">
					<button className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect" 
							onClick={() => this.props.onSubmit(this.state.ticker, this.state.amount)}>
					  Get Data
					</button>
				</div>
			</div>
		);
	}
}