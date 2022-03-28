import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/auth';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import SignupForm from '../forms/SignupForm';

class SignupPage extends Component{

    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }

    submit = (data) =>{
        return this.props.signup(data)
            .then(() => this.props.history.push("/choices"));
    }
    render(){
        return(
            <div style = {{width: "100vw", marginLeft: "-28vw"}}>
                <Header/>
                <div style = {{"paddingTop": "14vw", "margin-left": "13vw", "height":"100vh", "width":"200vw", "background":"linear-gradient(135deg, #331343 20%, red 80%)"}}>
                    <h1 style = {{"marginLeft": "62vw"}}>Signup</h1>
                    <SignupForm submit={this.submit}/><br/>
                    <div style = {{"marginLeft": "56vw"}}>Already have an account? <Link to="/login" style={{"color":"silver"}}>Login here</Link></div>
                </div>
            </div>
        )
    }
}
SignupPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignupPage);
