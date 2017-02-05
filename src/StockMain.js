import { Component } from 'react';

import StockRequest from './StockRequest';
import StockDetails from './StockDetails';

export default class StockMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stockData: null
		}

		this.getData = this.getData.bind(this);
	}

	getData(ticker) {
		var url = "http://query.yahooapis.com/v1/public/yql";
	    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + ticker + "')");
	    
	    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
			.done((data) => {
				this.setState({
					stockData: data.query.results.quote
				});
			})
			.fail((jqxhr, textStatus, error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<StockRequest onSubmit={this.getData}></StockRequest>
				<StockDetails stockData={this.state.stockData}></StockDetails>
			</div>
		);
	}
}