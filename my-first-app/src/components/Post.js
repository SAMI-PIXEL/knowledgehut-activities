import {Component} from "react";

export class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let comment = this.props.comment;
        return (
            <div style={{margin: "20px"}}>
                <p style={{color: "skyblue", marginLeft: "14px"}}>Comment: {comment.text}</p>
                <Profile author={comment.profile} />
                <div style={{marginLeft: "20px"}}>
                <span style={{color: "white", fontSize: "20px", marginRight: "20px"}}><button><img src="https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-22-1024.png" alt="like-button" width = "25" height = "20"/></button> {comment.likes}</span>
                <span style={{color: "red", fontSize: "20px", marginRight: "20px"}}><button><img src="https://www.nicepng.com/png/full/174-1746878_ios-emoji-emoji-iphone-ios-heart-hearts-spin.png" alt="like-button" width = "25" height = "20"/></button> {comment.loves}</span>
                </div>
            </div>
        );
    }
}

class Profile extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        let author = this.props.author;
        return(
            <div style={{margin: "20px"}}>
                <p style={{color: 'cornflowerblue'}}>Author: {author.name}</p>
                <img style={{border:"1px solid grey", borderRadius: "10px"}} src={author.imageUrl} width="150" hight="140" alt={author.name} />
               
            </div>
        )
    }
}