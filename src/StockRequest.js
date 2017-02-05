import { Component } from 'react';

export default class StockRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: ''
		}

		this.getData = this.getData.bind(this);
		this.handleTickerChange = this.handleTickerChange.bind(this);
	}

	handleTickerChange(event) {
		this.setState({
			ticker: event.target.value
		})
	}

	getData() {
		$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quoteslist%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
			.done((data) => {
				console.log(data);
			});
	}

	render() {
		return (
			<div>
				<form>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input className="mdl-textfield__input" 
							   type="text" 
							   id="ticker" 
							   value={this.state.value} 
							   onChange={this.handleTickerChange} />
						<label className="mdl-textfield__label" htmlFor="ticker">Stock Ticker</label>
					</div>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="amount" />
						<label className="mdl-textfield__label" htmlFor="amount">Investment Amount</label>
						<span className="mdl-textfield__error">Input is not a number!</span>
					</div>
				</form>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.getData}>
				  Get Data
				</button>
			</div>
		);
	}
}