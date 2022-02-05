import React from 'react';
import {useState} from 'react';
const postcontainer = {
    backgroundColor:'white',
    width:'550px',
    borderRadius:5,
    marginBottom:'10px',
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:'auto',
}
function Post({author,content,time,image,likes}) {
    const [like, setlike]=useState("false");
    return (
        <div style={postcontainer}>
            
            <div style={{display: 'flex',alignItems: 'center',paddingBottom: '10px'}}>
                <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
                    <img src={author.avatar} alt="avatar" height="50" style={{borderRadius:"50px"}}/>
                </div>
                <div>
                    <span><strong>{author.name}</strong></span>
                    <br/>
                    <span>{author.title}</span>
                    <br/>
                    <span>{time}</span>
                </div>
            </div>
            <div style={{textAlign:"justify",padding: '0px 10px'}}>
                {content}
            </div>
            <div style={{padding: '10px 0px' ,textAlign: 'center'}}>
                <img src={image} alt="post" width="80%"/>
            </div>
            <div style={{paddingLeft: 10, color:'GrayText',textAlign:'justify'}}>
                {like?(<span>{likes} people like the  post</span>)
                :(<span>You and {likes} others like this post</span>)}
            </div>
            <div style={{padding: 5,textAlign: 'center', display: 'flex'}}>
                <div style={{paddingRight:2, flex:1,cursor:'pointer' ,color:like?'black':'blue'}} onClick={() =>setlike(prelike=>!prelike)}>
                    Like
                </div>
                <div style={{padding:'0px 2px', flex:1,cursor:'pointer',color:'black'}}>
                    Comment
                </div>
                <div style={{padding:'0px 2px', flex:1,cursor:'pointer',color:'black'}}>
                    Share
                </div>
                <div style={{paddingLeft:'2px', flex:1,cursor:'pointer',color:'black'}}>
                    Send
                </div>
            </div>
        </div>
    )
}

export default Post