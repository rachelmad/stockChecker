import { Component } from 'react';

export default class StockMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pegAnalysis: null,
			priceVsBookValue: null,
			dividendAnalysis: null,
			amount: null,
			possibleTotal: null
		}

		this.getAnalysis = this.getAnalysis.bind(this);
		this.getStockResults = this.getStockResults.bind(this);
	}

	componentDidMount() {
		this.getAnalysis();
	}

	getAnalysis() {
		this.setState({
			amount: this.props.amount
		})

		if (this.props.stockData.PEGRatio < -2) {
			this.setState({
				pegAnalysis: "Very undervalued"
			});
		} else if (this.props.stockData.PEGRatio < 1) {
			this.setState({
				pegAnalysis: "Undervalued"
			});
		} else if (this.props.stockData.PEGRatio < 3) {
			this.setState({
				pegAnalysis: "Overvalued"
			});
		} else {
			this.setState({
				pegAnalysis: "Very overvalued"
			});
		}

		if (this.props.stockData.LastTradePriceOnly > this.props.stockData.BookValue) {
			this.setState({
				priceVsBookValue: "Overpriced"
			})
		} else {
			this.setState({
				priceVsBookValue: "Underpriced"
			})
		}

		if (this.props.stockData.DividendYield > 5) {
			this.setState({
				dividendAnalysis: "Good"
			});
		} else {
			this.setState({
				dividendAnalysis: "Bad"
			})
		}

		this.getStockResults();
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
					<h5 className="uk-card-title">Stock Analysis</h5>
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