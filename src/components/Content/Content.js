// Content.js
import React, {Component} from 'react';

class Content extends Component {
	render() {
		return(
				<div className="content-wrapper">
					<section className="content-header">
			      <h1>
			        Dashboard
			        <small>Version 2.0</small>
			      </h1>
			      <ol className="breadcrumb">
			        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
			        <li className="active">Dashboard</li>
			      </ol>
			    </section>

			    
    			<section className="content">

					</section>
				</div>
			);
	}
}

export default Content;