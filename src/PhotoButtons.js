import { Component } from 'react';

export default class PhotoButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type: this.props.type
		}
	}

	render() {
		return (
			<div className="uk-button-group">
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, -2)}>Very Bad</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, -1)}>Bad</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 0)}>Neutral</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 1)}>Good</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 2)}>Very Good</button>
			</div>
		)
	}
}