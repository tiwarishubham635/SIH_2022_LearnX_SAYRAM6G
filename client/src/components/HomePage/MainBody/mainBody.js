import React from 'react';
import './mainBody.css'
import Header from '../../Shared/Header(fixed)/headerFixed'
import TopMenu from '../../Shared/topMenu/index'


class MainBody extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header/>
				<TopMenu/>
				<div className="Main-Content">
					<div className="Above-Fold">
						<div className="Home-Branch-Box">			
								<div className="Branch-Box-Heading">
									<h2>
										<b>Computer Science and Engineering with specialization in AI</b>
									</h2>
								</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainBody;
