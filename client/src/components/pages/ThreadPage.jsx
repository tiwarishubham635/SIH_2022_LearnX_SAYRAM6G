import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Segment,Divider,Message,Button,Comment,Header,Dropdown} from 'semantic-ui-react';
import axios from 'axios'
import {createComment} from '../../actions/comment'
import styles from './ThreadPage.css';
import CommentForm from '../forms/CommentForm';
import Moment from 'react-moment';
import CommentDisplay from '../misc/CommentDisplay'
import ThreadDisplay from '../misc/ThreadDisplay'
import NavBar from '../misc/Navigation';

const orderOptionss = [
    {
        text:'Ascending',
        value:true
    },
    {
        text:'Descending',
        value:false
    }
]
const sortOptions =[
    {
        text:'Date',
        value:'Date',
    },
    {
        text:'Likes',
        value:'Likes'
    }

]
const compareKarma = (a,b)=>{
    return a.karma-b.karma
}

class ThreadPage extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            commentBox:false,
            comments:[],
            sortby:'Likes',
            ascending:false
        }
        this.submit = this.submit.bind(this);
        this.toggleComment = this.toggleComment.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.orderChange = this.orderChange.bind(this);
    }

    componentDidMount(){
        axios.get('/api/comments/'+ this.props.match.params.id).then(res=>{
            console.log("res.data.comments = " + JSON.stringify(res.data.comments));
            this.setState({
                comments:res.data.comments,
                loading:false
            })
        })
    }
    submit = (data) =>{
        data.thread = this.props.match.params.id
        return this.props.createComment(data)
            .then(() => {
                axios.get('/api/comments/'+ this.props.match.params.id).then(res=>{
                    this.setState({
                        comments:res.data.comments,
                        loading:false,
                        commentBox:false
                    })
                })
            })
    }
    toggleComment = () =>{
        this.setState({
            commentBox:!this.state.commentBox
        })

    }

    sortChange(e,data){
        this.setState({
            sortby:data['value']
        })
    }
    orderChange(e,data){
        this.setState({
            ascending:data['value']
        })
    }

    render(){
        let temp = this.state.comments.slice()

        if(this.state.sortby === 'Likes'){
            temp.sort(compareKarma)
        }
        if(this.state.sortby === 'Date'){
            temp = this.state.comments.slice()
        }
        if(!this.state.ascending){
            temp.reverse()
        }

        let commentList = temp.map(comment=>{
            return(
                <CommentDisplay key={comment._id} comment={comment}/>
            )
        })
        return(
            <div>
                <div style={{"marginTop":"1rem"}}>
                    <span className='firstname'>
                        Learn
                    </span>
                    <span className='secondname'>
                        X
                    </span>
                </div>
                
                <div style={{"padding":"0rem 10rem 0rem 10rem"}}>
                    <NavBar />
                    <Segment loading={this.state.loading} style ={{background: "#8a2be2"}}>
                        <ThreadDisplay threadid={this.props.match.params.id}/>
                    </Segment>
                    <Button active={this.state.commentBox} onClick={this.toggleComment}>Comment on this thread</Button>
                    <CommentForm visible={this.state.commentBox} submit={this.submit} body=''/>
                    <Segment loading={this.state.loading}>
                        <Dropdown defaultValue='Likes' selection options={sortOptions} onChange={this.sortChange}/>
                        <Dropdown defaultValue={false} selection options={orderOptionss} onChange={this.orderChange}/>
                        <Comment.Group>
                            <Header as='h3' dividing>Comments</Header>
                            {commentList}
                        </Comment.Group>
                    </Segment>
                </div>

            </div>
        )
    }

}
ThreadPage.propTypes={
    username:PropTypes.string.isRequired,
    createComment:PropTypes.func.isRequired
}
function mapStateToProps(state){
    return{
        username:state.user.username
    }
}

export default connect(mapStateToProps,{createComment})(ThreadPage)