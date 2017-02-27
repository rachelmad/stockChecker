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
			photoValuesChange: false,
			recommendationValue: null,
			recommendations: null,
			companyIndustryEarnings: null,
			growth: null,
			earningsSurprises: null
		}

		this.getAnalysis = this.getAnalysis.bind(this);
		this.getStockResults = this.getStockResults.bind(this);
		this.getLowValue = this.getLowValue.bind(this);
		this.getHighValue = this.getHighValue.bind(this);
		this.getPhotoAnalysis = this.getPhotoAnalysis.bind(this);
	}

	componentDidMount() {
		this.getAnalysis();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.stockData.symbol != prevState.ticker) {
			this.setState({
				ticker: this.props.stockData.symbol
			});

			this.getAnalysis();
		}
		if (this.props.photoValuesChange != prevState.photoValuesChange &&
			this.props.photoValues) {
			this.setState({
				photoValues: this.props.photoValues,
				photoValuesChange: this.props.photoValuesChange
			});
			this.getPhotoAnalysis();
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

	getPhotoAnalysis() {
		this.setState({
			recommendations: this.props.photoValues.recommendations,
			companyIndustryEarnings: this.props.photoValues.companyIndustryEarnings,
			growth: this.props.photoValues.growth,
			earningsSurprises: this.props.photoValues.earningsSurprises
		})
	}

	getHighValue(original, point, veryGood, veryBad) {
		if (original) {
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
		if (original) {
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
						<dt>Analyst recommendations</dt>
					    <dd>Analysts recommend <span className="lowercase">{this.state.recommendations}</span></dd>
					    <dd>Expectations have previously been <span className="lowercase">{this.state.earningsSurprises}</span></dd>
					    <dt>Company status</dt>
					    <dd>Based on the PEG, this stock is <span className="lowercase">{this.state.pegAnalysis}</span></dd>
					    <dd>Based on the book value, this stock is <span className="lowercase">{this.state.priceVsBookValue}</span></dd>
					    <dd>The company has <span className="lowercase">{this.state.companyIndustryEarnings}</span> industry earnings</dd>
					    <dd>Growth is expected to be <span className="lowercase">{this.state.growth}</span></dd>
					    <br />
					    <dt>Dividends</dt>
					    <dd>This stock has <span className="lowercase">{this.state.dividendAnalysis}</span> dividend</dd>
					    <br />
					    <dt>Profit potential</dt>
					    <dd>If you invest {this.props.amount}, you make {this.state.possibleTotal} if they reach the target price</dd>
					</dl>
				</div>
			</div>
		);
	}
}