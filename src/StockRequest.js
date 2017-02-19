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
			<div className="uk-card-header uk-padding-remove-top">
				<span className="uk-card-title">Stock Info</span>
				<hr />
			</div>;

		var tickerInput = 
			<div>
				<input className="uk-input" 
					   type="text" 
					   id="ticker" 
					   placeholder="Stock Ticker"
					   value={this.state.value} 
					   onChange={this.handleTickerChange} />
			</div>;

		var amountInput = 
			<div>
				<input className="uk-input" 
					   type="text" 
					   // pattern="-?[0-9]*(\.[0-9]+)?" 
					   id="amount" 
					   placeholder="Investment Amount"
					   value={this.state.amount}
					   onChange={this.handleAmountChange} />
			</div>;

		return (
			<div className="uk-card uk-card-small uk-card-body uk-card-primary uk-card-hover uk-padding-small">
				{cardTitle}
				<div className="uk-card-body">
					<form>
						{tickerInput}
						{amountInput}	
					</form>
				</div>
				<div className="uk-card-footer">
					<button className="uk-button uk-button-text" 
							onClick={() => this.props.onSubmit(this.state.ticker, this.state.amount)}>
					  Get Data
					</button>
				</div>
			</div>
		);
	}
}