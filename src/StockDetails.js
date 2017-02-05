import { Component } from 'react';

export default class StockDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logo: "http://www.nasdaq.com//logos/" + this.props.stockData.symbol + ".GIF",
			ticker: this.props.stockData.symbol,
			name: this.props.stockData.Name,
			price: this.props.stockData.LastTradePriceOnly,
			bookValue: this.props.stockData.BookValue,
			peg: this.props.stockData.PEGRatio,
			dividend: this.props.stockData.DividendYield,
			targetPrice: this.props.stockData.OneyrTargetPrice,
			shortInterest: this.props.stockData.ShortRatio,
			recommendation: "http://www.nasdaq.com/charts/" + this.props.stockData.symbol + "_smallcnb.jpeg",
			companyIndustryEarnings: "http://www.nasdaq.com/charts/" + this.props.stockData.symbol + "_eg.jpeg",
			growth: "http://www.nasdaq.com//charts/" + this.props.stockData.symbol + "_egr.jpeg",
			earningsSurprise: "http://www.nasdaq.com//charts/" + this.props.stockData.symbol + "_sur.jpeg"
		}
	}

	render() {
		return (
			<div className="mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title card-title">
					<h5 className="mdl-card__title-text">Stock Details</h5>
				</div>
				<div className="mdl-card__supporting-text">
					<img src={this.state.logo}></img><br />
					<span>Name: {this.state.name}</span><br />
					<span>Ticker: <span className="uppercase">{this.state.ticker}</span></span><br />
					<span>Price: {this.state.price}</span><br />
					<span>Book Value: {this.state.bookValue}</span><br />
					<span>PEG: {this.state.peg}</span><br />
					<span>Dividend Yield: {this.state.dividend}</span><br />
					<span>Target Price: {this.state.targetPrice}</span><br />
					<span>Short Interest Ratio: {this.state.shortInterest}</span><br />
					<span>Analyst Recommendations:</span><br />
					<img src={this.state.recommendation}></img><br />
					<span>Company vs Industry Earnings:</span><br />
					<img src={this.state.companyIndustryEarnings}></img><br />
					<span>Growth:</span><br />
					<img src={this.state.growth} width="300"></img><br />
					<span>Earnings Surprises:</span><br />
					<img src={this.state.earningsSurprise} width="300"></img><br />
				</div>
			</div>
		);
	}
}