import React from 'react';
import './header.css';
import logo from './logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="Header-Site-Title">
					<img className = "Header-logo" src={logo} alt = ""/>
					
					<div className="Department-Name">
						<h1 >
							<b>Social Media for Education</b>
							<br/>
						</h1>
						<h3>
							- For SIH 2022
						</h3>					
					</div>			
				</div>
			</header>
		);
	}
}

export default Header;
