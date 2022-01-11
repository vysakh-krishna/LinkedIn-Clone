import React,{useState} from 'react'
const navIcons={
    textAlign: 'center',
    fontSize:12,
    minWidth:50,
    padding:3,
    marginLeft:10,
    marginRight:10
}
const navbar={
    backgroundColor: 'white' ,
    position: 'fixed',
    // height: 52, 
    width: '100%',
    top: 0,
}
const nav={
    // padding: '0px 10px',
    maxWidth: '900px',
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 auto'
}
const search={
    height:32,
    // maxWidth:'400px',
    flex:1,
    maxWidth:'300px',
    paddingLeft: 15,
    border:'0px',
    borderRadius:5,
    backgroundColor: '#EEF3F8',
    marginLeft:10,
    alignItems: 'center'
}

const selectedIcon={
    textAlign: 'center',
    fontSize:12,
    minWidth:50,
    padding:3,
    marginLeft:10,
    marginRight:10,
    borderBottom: '1.5px solid black'
}
function Navbar(props) {
    const [text,setText]=useState("");
    return (
        <div style={navbar}>
            <div style={nav}>
                <div>
                    <img src="Linkedin-logo.png" alt="Linkedin" height="32" />
                </div>
                <div style={{flex:1,display:'flex',marginLeft:5}}>
                    <input placeholder="Search..." style={search} value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div style={props.content==="Home"?selectedIcon: navIcons} onClick={()=>props.setContent("Home")}>
                    <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-colored/48/JD-15-512.png" alt="" height="20" />
                    <br/>
                    Home
                </div>
                <div style={props.content==="My Network"?selectedIcon: navIcons} onClick={()=>props.setContent("My Network")}>
                    <img src="https://irp-cdn.multiscreensite.com/cfc89b6a/dms3rep/multi/tablet/about-us-400x400.png" alt="" height="20" />
                    <br/>
                    My Network
                </div>
                <div style={props.content==="Jobs"?selectedIcon: navIcons} onClick={()=>props.setContent("Jobs")}>
                    <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-colored/48/JD-14-512.png" alt="" height="20" />
                    <br/>
                    Jobs
                </div>
                <div style={props.content==="Messaging"?selectedIcon: navIcons} onClick={()=>props.setContent("Messaging")}>
                    <img src="https://www.shareicon.net/data/512x512/2017/05/22/886181_email_512x512.png" alt="" height="20" />
                    <br/>
                    Messaging
                </div>
                <div style={props.content==="Notifications"?selectedIcon: navIcons} onClick={()=>props.setContent("Notifications")}>
                    <img src="https://webstockreview.net/images/notification-icon-png-4.png" alt="" height="20" />
                    <br/>
                    Notifications
                </div>
            </div>
        </div> 
    )
}

export default Navbar