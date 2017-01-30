import { Component } from 'react';

export default class StockRequest extends Component {
	render() {
		return (
			<form action="#">
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input className="mdl-textfield__input" type="text" id="ticker" />
					<label className="mdl-textfield__label" htmlFor="ticker">Stock Ticker</label>
				</div>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="amount" />
					<label className="mdl-textfield__label" htmlFor="amount">Investment Amount</label>
					<span className="mdl-textfield__error">Input is not a number!</span>
				</div>
			</form>
		);
	}
}