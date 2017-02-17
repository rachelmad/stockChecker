import { Component } from 'react';

import StockRequest from './StockRequest';
import StockDetails from './StockDetails';
import StockAnalysis from './StockAnalysis';

export default class StockMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stockData: null,
			showStockDetails: false,
			amount: null,
			photoValues: null
		}

		this.getData = this.getData.bind(this);
		this.updatePhotoDetails = this.updatePhotoDetails.bind(this);
	}

	getData(ticker, amountEntered) {
		var url = "https://query.yahooapis.com/v1/public/yql";
	    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + ticker + "')");

	    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
			.done((data) => {
				this.setState({
					stockData: data.query.results.quote,
					showStockDetails: true, 
					amount: amountEntered
				});
			})
			.fail((jqxhr, textStatus, error) => {
				console.log(error);
			});
	}

	updatePhotoDetails(type, e) {
		console.log(type, e.target.value);
	}

	render() {
		var stockDetails = null;
		var stockAnalysis = null;
		if (this.state.showStockDetails) {
			stockDetails = <StockDetails stockData={this.state.stockData} 
										 onPhotoUpdate={this.updatePhotoDetails}></StockDetails>;
			stockAnalysis = <StockAnalysis stockData={this.state.stockData} 
										   amount={this.state.amount}></StockAnalysis>;
		} else {
			stockDetails = null;
			stockAnalysis = null;
		}

		return (
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--4-col">
					<StockRequest onSubmit={this.getData}></StockRequest>
				</div>
				<div className="mdl-cell mdl-cell--4-col">
					{stockDetails}
				</div>
				<div className="mdl-cell mdl-cell--4-col">
					{stockAnalysis}
				</div>
			</div>
		);
	}
}