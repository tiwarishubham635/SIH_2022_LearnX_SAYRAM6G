import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const NavBar = ({user,logout}) => {
    var gapi = window.gapi
    var CLIENT_ID = "736510754208-8l07kqt80e1vqntpp3f31mpqr7q9jsfe.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBcly7tEicFpr-MEsBGHvRYyzdUE99oVXc"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"


    const handleClick = () => {
        // const sdate = String(year) + '-' + (month < 10 ? '0' + String(month) : String(month)) + '-' + String(day);
        // console.log("SDate : ", sdate);
        gapi.load('client:auth2', () => {
            console.log('Client has been loaded')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('Calender has been loaded !'))
            const sdate = new Date()
            gapi.auth2.getAuthInstance().signIn().then(() => {
            console.log("connected")
            var event = {
                'summary': "LearnX Meet",
                'location': 'New Delhi',
                'description': 'Meeting',
                'start': {
                // 'dateTime': (sdate) + "T" + "21:00" + ":00+05:30" ,
                'dateTime': '2022-03-30T09:00:00+05:30',
                'timeZone': 'Asia/Kolkata'
                },
                'end': {
                'dateTime': '2022-03-30T10:00:00+05:30',
                'timeZone': 'Asia/Kolkata'
                },
                'recurrence': [
                  'RRULE:FREQ=DAILY;COUNT=0'
                ],
                'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10}
                ]
                }
            }

            var request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': event,
            })

            request.execute(event => {
                console.log(event)
                window.open(event.htmlLink)
            })

            })
        })
    }
    //console.log("Hello from Navigation: ", user);
    return (
    <Menu secondary pointing >
        <Menu.Item as={Link} to='/forum' style={{color:"white", fontSize: "20px"}}>Home</Menu.Item>
        <Menu.Item as={Link} to={`/users/${user.username}`} style={{color:"white", fontSize: "20px"}}>{user.username}</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/newthread' style={{color:"white", fontSize: "20px"}}>New Thread</Menu.Item>
            {user.role === "ADMIN" && <Menu.Item onClick={() => handleClick()} style={{color:"white", fontSize: "20px"}}>Schedule a Meet</Menu.Item>}
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

