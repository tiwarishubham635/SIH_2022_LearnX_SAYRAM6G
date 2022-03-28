import React from 'react';
import './header.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';


class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="Header-Site-Title">
					<div className="Department-Name">
						<span className='firstname'>
							Learn
						</span>
						<span className='secondname'>
							X
						</span>
						<span className='text_sect'>
						&emsp; - For Next Generation Learning
						</span>	
					</div>

					<div className='signup'>
						<Link to="/signup" style={{"background":"#0e71e8", "padding":"0.5rem", "color":"white"}}>Join Our Community</Link>
					</div>			
				</div>
			</header>
		);
	}
}

export default Header;
