import { Component } from 'react';

export default class PhotoButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		return (
			<div className="uk-button-group">
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical">1</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical">2</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical">3</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical">4</button>
			    <button className="uk-button uk-button-primary uk-padding-small	uk-padding-remove-vertical">5</button>
			</div>
		)
	}
}