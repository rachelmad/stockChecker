import { Component } from 'react';

export default class StockRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: ''
		}

		this.handleTickerChange = this.handleTickerChange.bind(this);
	}

	handleTickerChange(event) {
		this.setState({
			ticker: event.target.value
		})
	}

	render() {
		return (
			<div className="mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title card-title">
					<h5 className="mdl-card__title-text">Stock Info</h5>
				</div>
				<div className="mdl-card__supporting-text mdl-card--border">
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
				</div>
				<div className="mdl-card__actions mdl-card--border">
					<button className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect" onClick={() => this.props.onSubmit(this.state.ticker)}>
					  Get Data
					</button>
				</div>
				
			</div>
		);
	}
}