import { Component } from 'react';
import Chart from 'chart.js';

export default class StockMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ticker: this.props.stockData.symbol,
			amount: this.props.amount,
			possibleTotal: null,
			photoValues: {},
			photoValuesChange: false,
			recommendationValue: null,
			chartScope: null,
			analysis: this.props.analysis
		}

		this.getStockResults = this.getStockResults.bind(this);
		this.createChart = this.createChart.bind(this);
	}

	componentDidMount() {
		this.createChart();
		this.getStockResults();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.stockData.symbol != prevState.ticker) {
			this.setState({
				ticker: this.props.stockData.symbol
			});
		}
		if (this.state.chartScope) {
			this.state.chartScope.update();
		}
	}

	createChart() {
		var ctx = document.getElementById("chart");
		var chart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: [
		        	"Analyst Recommendations", 
		        	"Dividends", 
		        	"Earnings Surprises", 
		        	"Growth", 
		        	"PEG", 
		        	"Company v Industry", 
		        	"Book Value"
	        	],
		        datasets: [{
		            data: [this.state.analysis.recommendations, 
		            	this.state.analysis.dividendAnalysis, 
		            	this.state.analysis.earningsSurprises, 
		            	this.state.analysis.growth, 
		            	this.state.analysis.pegAnalysis, 
		            	this.state.analysis.companyIndustryEarnings,
		            	this.state.analysis.priceVsBookValue],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});

		this.setState({
			chartScope: chart
		})
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
					<canvas id="chart" width="400" height="400"></canvas>
					<dl className="uk-description-list">
					    <dt>Profit potential</dt>
					    <dd>If you invest {this.props.amount}, you make {this.state.possibleTotal} if they reach the target price</dd>
					</dl>
				</div>
			</div>
		);
	}
}