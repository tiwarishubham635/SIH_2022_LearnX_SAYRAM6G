import React, { Component } from 'react';
import Item from './item';
import Lead from './lead';
import { NavLink, Link } from "react-router-dom";
import './index.css'

class TopMenu extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                menu_class: '',
            }
        }

        setToggleMenuClass = () =>{
            if(this.state.menu_class === ''){
                this.setState({
                    menu_class: 'toggled',
                })
            } else{
                this.setState({
                    menu_class: '',
                })
            }
        }
        
        render = () =>{
            let top_menu_class = `top-menu ${this.state.menu_class}`
            return (
                <div>
                    <div className = {top_menu_class}>
                        <Lead text=''></Lead>
                        <div className = 'left'>

                        <NavLink to="/">
                            <Item text='Home'/>
                        </NavLink>

                        <NavLink to="/about">
                            <Item text='About'/>
                        </NavLink>

                        <NavLink to="/announcement">
                            <Item text='Announcements'/>
                        </NavLink>

                        <NavLink to="/faculty">
                            <Item text='Faculty'/>
                        </NavLink>

                        <NavLink to='/opportunity'>
                            <Item text='Opportunity'/>
                        </NavLink>

                        <NavLink to='/society'>
                            <Item text='Society'/>
                        </NavLink>
                        <NavLink to = '/creators'>
                            <Item text='Creators'/>
                        </NavLink>

                        </div>
                        <div className= 'right'>
                        <NavLink to='/forum' target='_blank'>
                            <Item text='Forum'/>
                        </NavLink>
                        <a href={'https://www.imsnsit.org'} target='_blank'>
                            NSUT-IMS
                        </a>
                        </div>                 
                        <div className='clear-fix'/>
                    </div>
                </div>
        )
    }
}

export default TopMenu
