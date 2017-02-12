import { Component } from 'react';

export default class PhotoButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		return (
			<div className="space-around">
				<div>
				    <span className="mdl-list__item-primary-content">
			   		   1
			 	   </span>
			    	<span className="mdl-list__item-secondary-action">
			      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
			        		<input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" />
			      		</label>
			    	</span>
			    </div>
			    <div>
			    	<span className="mdl-list__item-primary-content">
			      		2
			    	</span>
			    	<span className="mdl-list__item-secondary-action">
			      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
			        		<input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" />
			      		</label>
			    	</span>
			    </div>
			    <div>
			    	<span className="mdl-list__item-primary-content">
			      		3
			    	</span>
			    	<span className="mdl-list__item-secondary-action">
			      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
			        		<input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" />
			      		</label>
			    	</span>
			    </div>
			    <div>
			    	<span className="mdl-list__item-primary-content">
			      		4
			    	</span>
			    	<span className="mdl-list__item-secondary-action">
			      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
			        		<input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" />
			      		</label>
			    	</span>
			    </div>
			    <div>
			    	<span className="mdl-list__item-primary-content">
			      		5
			    	</span>
			    	<span className="mdl-list__item-secondary-action">
			      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
			        		<input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" />
			      		</label>
			    	</span>
		    	</div>
		    </div>
		)
	}
}