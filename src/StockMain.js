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
			showStockAnalysis: false,
			amount: null,
			photoValues: {},
			photoValuesChange: false,
			analysis: {}
		}

		this.showStockAnalysisFunc = this.showStockAnalysisFunc.bind(this);
		this.getData = this.getData.bind(this);
		this.updateAnalysis = this.updateAnalysis.bind(this);
		this.getAnalysis = this.getAnalysis.bind(this);
		this.getLowValue = this.getLowValue.bind(this);
		this.getHighValue = this.getHighValue.bind(this);
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
				this.getAnalysis();
			})
			.fail((jqxhr, textStatus, error) => {
				console.log(error);
			});
	}

	getAnalysis() {
		var analysisCopy = {
			pegAnalysis: this.getLowValue(this.state.stockData.PEGRatio, 1, -1, 2),
			priceVsBookValue: this.getLowValue(this.state.stockData.LastTradePriceOnly, 
				this.state.stockData.BookValue, 0.5 * this.state.stockData.BookValue, 
				2 * this.state.stockData.BookValue),
			dividendAnalysis: this.getHighValue(this.state.stockData.DividendYield, 5, 7, 1),
			amount: this.state.amount
		}

		this.setState({
			analysis: analysisCopy
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

	showStockAnalysisFunc() {
		this.setState({
			showStockAnalysis: true
		})
	}

	updateAnalysis(type, value) {
		var analysisCopy = this.state.analysis;

		switch(type) {
			case "recommendations":
				analysisCopy.recommendations = value;
				this.setState({
					analysis: analysisCopy
				});
				break;
			case "companyIndustryEarnings":
				analysisCopy.companyIndustryEarnings = value;
				this.setState({
					analysis: analysisCopy
				});
				break;
			case "growth":
				analysisCopy.growth = value;
				this.setState({
					analysis: analysisCopy
				});
				break;
			case "earningsSurprises":
				analysisCopy.earningsSurprises = value;
				this.setState({
					analysis: analysisCopy
				});
				break;
		}
	}

	render() {
		var stockDetails = null;
		if (this.state.showStockDetails) {
			stockDetails = <StockDetails stockData={this.state.stockData} 
										 onPhotoUpdate={this.updateAnalysis}
										 onNext={this.showStockAnalysisFunc}></StockDetails>;
		} else {
			stockDetails = null;
		}

		var stockAnalysis = null;
		if (this.state.showStockAnalysis) {
			stockAnalysis = <StockAnalysis stockData={this.state.stockData} 
										   amount={this.state.amount}
										   photoValues={this.state.photoValues}
										   photoValuesChange={this.state.photoValuesChange}
										   analysis={this.state.analysis}></StockAnalysis>;
		} else {
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