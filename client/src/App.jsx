import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginPage from "./components/pages/LoginPage"
import FrontPage from "./components/pages/FrontPage"
import UserRoute from "./components/pageroutes/UserRoute"
import GuestRoute from "./components/pageroutes/GuestRoute"

import SignupPage from "./components/pages/SignupPage";
import NavBar from './components/misc/Navigation';
import NewThreadPage from './components/pages/NewThreadPage';
import ThreadPage from './components/pages/ThreadPage';
import HistoryPage from "./components/pages/HistoryPage";

const ForumAndNavbar = () => {
        return(
            <div style={{"backgroundColor":""}}>
                <NavBar/>
                <FrontPage />
            </div>
        );
}

// const ThreadAndNavbar = () => {
//     return(
        
//     );
// }


// const HistoryAndNavbar = () => {
//     return(
//         <div style={{marginLeft: "25vw"}}>
//             <NavBar/>
//             <HistoryPage />
//         </div>
//     );
// }

const App =({location,isAuthenticated}) => (
        <div className="normal-page" style={{"backgroundColor":""}}>
                <GuestRoute location={location} path="/" exact component={LoginPage}/>
                <GuestRoute location={location} path="/login" exact component={LoginPage}/>
                <UserRoute location={location} path="/forum" component={ForumAndNavbar}/>
                <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
                <UserRoute location={location} path="/newthread" exact component={NewThreadPage}/>
                <UserRoute location={location} path="/thread/:id" exact component={ThreadPage} />
                <UserRoute location={location} path="/users/:username" exact component={HistoryPage} />
            
        </div> 
);

App.propTypes ={
    location:PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}
function mapStateToProps(state){
    return{
        isAuthenticated: !!state.user.token
    }

}
export default connect(mapStateToProps)(App);
