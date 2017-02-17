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
			<div className="space-around">
				<div>
		   		   1
		      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" 
		      			   htmlFor="list-option-1">
		        		<input type="radio" 
		        			   id="list-option-1" 
		        			   className="mdl-radio__button" 
		        			   value="1"
		        			   onChange={this.props.onUpdate.bind(this, this.state.type)} />
		      		</label>
			    </div>
			    <div>
		      		2
		      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" 
		      			   htmlFor="list-option-2">
		        		<input type="radio" 
		        			   id="list-option-2" 
		        			   className="mdl-radio__button" 
		        			   value="2"
		        			   onChange={this.props.onUpdate.bind(this, this.state.type)} />
		      		</label>
			    </div>
			    <div>
		      		3
		      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" 
		      			   htmlFor="list-option-3">
		        		<input type="radio" 
		        			   id="list-option-3" 
		        			   className="mdl-radio__button" 
		        			   value="3"
		        			   onChange={this.props.onUpdate.bind(this, this.state.type)} />
		      		</label>
			    </div>
			    <div>
		      		4
		      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" 
		      			   htmlFor="list-option-4">
		        		<input type="radio" 
		        			   id="list-option-4" 
		        			   className="mdl-radio__button" 
		        			   value="4"
		        			   onChange={this.props.onUpdate.bind(this, this.state.type)} />
		      		</label>
			    </div>
			    <div>
		      		5
		      		<label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" 
		      			   htmlFor="list-option-5">
		        		<input type="radio" 
		        			   id="list-option-5" 
		        			   className="mdl-radio__button" 
		        			   value="5"
		        			   onChange={this.props.onUpdate.bind(this, this.state.type)} />
		      		</label>
		    	</div>
		    </div>
		)
	}
}