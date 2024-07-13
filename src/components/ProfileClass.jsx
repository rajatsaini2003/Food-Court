import React from 'react';
import { GITHUB_API } from '../utils/constants';
import { Link } from 'react-router-dom';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
       // console.log("child constructor");
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
                avatar_url:"http://dummyphoto"
            }
        };
    }
    async componentDidMount(){
        //console.log("child componentDidMount");
        const data= await fetch(GITHUB_API);
        const json=await  data.json();
        this.setState({userInfo:json});
        //console.log(json);
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate");

    }
    componentWillUnmount(){
        console.log("child componentWillUnmount");
    }
    render(){
        //console.log("child render");
        const{name,location,twitter_username,avatar_url}=this.state.userInfo;
        return(
            <div>
                <img src={avatar_url} alt="User avatar" className="avatar-user"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact at X: @<Link to={"https://x.com/"+twitter_username}>{twitter_username} </Link></h3>
            </div>
        )
    }
}

export default ProfileClass;


/*
    #Mounting cycle
        -constructor dummy
        -render dummy
        -<HTML dummy>
    #ComponentDidMount
        -<API Call>
        -<this.setState> ->state variable updated

    #Updating cycle
        -render (API data)
        -<HTML> (API DATA)
        componentDidUpdate
        

*/