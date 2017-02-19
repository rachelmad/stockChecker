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
			    		onClick={(e) => this.props.onUpdate(this.state.type, 1)}>1</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 2)}>2</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 3)}>3</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 4)}>4</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical"
			    		onClick={(e) => this.props.onUpdate(this.state.type, 5)}>5</button>
			</div>
		)
	}
}