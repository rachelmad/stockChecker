import { Component } from 'react';

export default class StockMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: null,
			pegAnalysis: null,
			priceVsBookValue: null,
			dividendAnalysis: null,
			amount: null,
			possibleTotal: null,
			photoValues: {},
			photoValuesChange: false
		}

		this.getAnalysis = this.getAnalysis.bind(this);
		this.getStockResults = this.getStockResults.bind(this);
		this.getLowValue = this.getLowValue.bind(this);
		this.getHighValue = this.getHighValue.bind(this);
	}

	componentDidMount() {
		this.getAnalysis();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.stockData.symbol != prevState.ticker ||
			this.props.photoValuesChange != prevState.photoValuesChange) {
			this.setState({
				ticker: this.props.stockData.symbol,
				photoValues: this.props.photoValues,
				photoValuesChange: this.props.photoValuesChange
			});
			this.getAnalysis();
		}
	}

	getAnalysis() {
		this.setState({
			pegAnalysis: this.getLowValue(this.props.stockData.PEGRatio, 1, -1, 2),
			priceVsBookValue: this.getLowValue(this.props.stockData.LastTradePriceOnly, 
				this.props.stockData.BookValue, 0.5 * this.props.stockData.BookValue, 
				2 * this.props.stockData.BookValue),
			dividendAnalysis: this.getHighValue(this.props.stockData.DividendYield, 5, 7, 1),
			amount: this.props.amount
		});

		this.getStockResults();
	}

	getHighValue(original, point, veryGood, veryBad) {
		if (original == null || original == undefined) {
			return 0;
		} else if (original < veryBad) {
			return -2;
		} else if (original < point) {
			return -1;		
		} else if (original < veryGood) {
			return 1;
		} else {
			return 2;
		}		 
	}

	getLowValue(original, point, veryGood, veryBad) {
		if (original == null || original == undefined) {
			return 0;
		} else if (original > veryBad) {
			return -2;
		} else if (original > point) {
			return -1;		
		} else if (original > veryGood) {
			return 1;
		} else {
			return 2;
		}		 
	}

	getStockResults() {
		var numShares = Math.floor(this.props.amount / this.props.stockData.LastTradePriceOnly);
		var possibleTotal = numShares * this.props.stockData.OneyrTargetPrice;
		
		this.setState({
			possibleTotal: possibleTotal
		})
	}

	render() {
		return (
			<div className="uk-card uk-card-small uk-card-body uk-card-default uk-card-hover uk-container-small">
				<div className="uk-card-header">
					<span className="uk-card-title">Stock Analysis</span>
				</div>
				<div className="uk-card-body">
					<dl className="uk-description-list">
					    <dt>Value</dt>
					    <dd>Based on the PEG, this stock is <span className="lowercase">{this.state.pegAnalysis}</span></dd>
					    <dd>Based on the book value, this stock is <span className="lowercase">{this.state.priceVsBookValue}</span></dd>
					    <br />
					    <dt>Dividends</dt>
					    <dd>This stock has <span className="lowercase">{this.state.dividendAnalysis}</span> dividend</dd>
					    <br />
					    <dt>Profit Potential</dt>
					    <dd>If you invest {this.props.amount}, you make {this.state.possibleTotal} if they reach the target price</dd>
					</dl>
				</div>
			</div>
		);
	}
}