import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const NavBar = ({user,logout}) => {
    console.log("Hello from Navigation: ", user);
    return (
    <Menu secondary pointing >
        <Menu.Item as={Link} to='/forum' style={{color:"white", fontSize: "20px"}}>Home</Menu.Item>
        <Menu.Item as={Link} to={`/users/${user.username}`} style={{color:"white", fontSize: "20px"}}>{user.username}</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/newthread' style={{color:"white", fontSize: "20px"}}>New Thread</Menu.Item>
            {user.role === "ADMIN" && <Menu.Item as={Link} to='/newthread' style={{color:"white", fontSize: "20px"}}>Schedule a Meet</Menu.Item>}
            <Menu.Item onClick={() => logout()} style={{color:"white", fontSize: "20px"}}>Logout</Menu.Item>
        </Menu.Menu>
    </Menu>
    );
};


NavBar.propTypes = {
    logout:PropTypes.func.isRequired,
    user: PropTypes.object.isRequired

};
function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps,{logout})(NavBar);

