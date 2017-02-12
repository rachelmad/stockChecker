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
			<div className="mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title card-title">
					<h5 className="mdl-card__title-text">Stock Analysis</h5>
				</div>
				<div className="mdl-card__supporting-text">
					<h5 className="no-top-margin">Value</h5>
					<span>Based on the PEG, this stock is <span className="lowercase">{this.state.pegAnalysis}</span>.</span><br />
					<span>Based on the book value, this stock is <span className="lowercase">{this.state.priceVsBookValue}</span>.</span><br />
					
					<h5>Dividends</h5>
					<span>This stock has <span className="lowercase">{this.state.dividendAnalysis}</span> dividend.</span><br />
					
					<h5>Profit Potential</h5>
					<span>If you invest {this.props.amount}, you make {this.state.possibleTotal} if they reach the target price.</span>
				</div>
			</div>
		);
	}
}