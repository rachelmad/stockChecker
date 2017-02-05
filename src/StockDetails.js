import { Component } from 'react';

export default class StockDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: null,
			name: null,
			price: null,
			peg: null,
			dividend: null,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.stockData.symbol != prevState.ticker ||
			this.props.stockData.Name != prevState.name ||
			this.props.stockData.LastTradePriceOnly != prevState.price ||
			this.props.stockData.PEGRatio != prevState.peg ||
			this.props.stockData.DividendYield != prevState.dividend) {
			this.setState({
				ticker: this.props.stockData.symbol,
				name: this.props.stockData.Name,
				price: this.props.stockData.LastTradePriceOnly,
				peg: this.props.stockData.PEGRatio,
				dividend: this.props.stockData.DividendYield
			})
		}
	}

	render() {
		return (
			<div>
				<span>Name: {this.state.name}</span><br />
				<span>Ticker: {this.state.ticker}</span><br />
				<span>Price: {this.state.price}</span><br />
				<span>PEG: {this.state.peg}</span><br />
				<span>Dividend Yield: {this.state.dividend}</span>
			</div>
		);
	}
}