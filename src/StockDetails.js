import { Component } from 'react';

export default class StockDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logo: null,
			ticker: null,
			name: null,
			price: null,
			peg: null,
			dividend: null,
			targetPrice: null,
			recommendation: null,
			companyIndustryEarnings: null,
			growth: null,
			earningsSurprise: null
		}

		this.getImages = this.getImages.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.stockData.symbol != prevState.ticker ||
			this.props.stockData.Name != prevState.name ||
			this.props.stockData.LastTradePriceOnly != prevState.price ||
			this.props.stockData.PEGRatio != prevState.peg ||
			this.props.stockData.DividendYield != prevState.dividend ||
			this.props.stockData.OneyrTargetPrice != prevState.targetPrice) {
			this.setState({
				ticker: this.props.stockData.symbol,
				name: this.props.stockData.Name,
				price: this.props.stockData.LastTradePriceOnly,
				peg: this.props.stockData.PEGRatio,
				dividend: this.props.stockData.DividendYield,
				targetPrice: this.props.stockData.OneyrTargetPrice
			})
			this.getImages();
		}
	}

	getImages() {
		var logoURL = "http://www.nasdaq.com//logos/" + this.state.ticker + ".GIF";
		var recommendationURL = "http://www.nasdaq.com/charts/" + this.state.ticker + "_smallcnb.jpeg";
		var companyIndustryEarningsURL = "http://www.nasdaq.com/charts/" + this.state.ticker + "_eg.jpeg"
		var growthURL = "http://www.nasdaq.com//charts/" + this.state.ticker + "_egr.jpeg"
		var earningsSurpriseURL = "http://www.nasdaq.com//charts/" + this.state.ticker + "_sur.jpeg"
		this.setState({
			logo: logoURL,
			recommendation: recommendationURL,
			companyIndustryEarnings: companyIndustryEarningsURL,
			growth: growthURL,
			earningsSurprise: earningsSurpriseURL
		})
	}

	render() {
		return (
			<div>
				<img src={this.state.logo}></img><br />
				<span>Name: {this.state.name}</span><br />
				<span>Ticker: {this.state.ticker}</span><br />
				<span>Price: {this.state.price}</span><br />
				<span>PEG: {this.state.peg}</span><br />
				<span>Dividend Yield: {this.state.dividend}</span><br />
				<span>Target Price: {this.state.targetPrice}</span><br />
				<span>Analyst Recommendations:</span><br />
				<img src={this.state.recommendation}></img><br />
				<span>Company vs Industry Earnings:</span><br />
				<img src={this.state.companyIndustryEarnings}></img><br />
				<span>Growth:</span><br />
				<img src={this.state.growth}></img><br />
				<span>Earnings Surprises:</span><br />
				<img src={this.state.earningsSurprise}></img><br />
			</div>
		);
	}
}