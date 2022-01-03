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
    width: '100%'
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

// const selectedIcon={
//     borderBottom: '1px solid black'
// }
function Navbar() {
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
                <div style={navIcons}>
                    <img src="home.png" alt="" height="20" />
                    <br/>
                    Home
                </div>
                <div style={navIcons}>
                    <img src="home.png" alt="" height="20" />
                    <br/>
                    My Network
                </div>
                <div style={navIcons}>
                    <img src="home.png" alt="" height="20" />
                    <br/>
                    Jobs
                </div>
                <div style={navIcons}>
                    <img src="home.png" alt="" height="20" />
                    <br/>
                    Messaging
                </div>
                <div style={navIcons}>
                    <img src="home.png" alt="" height="20" />
                    <br/>
                    Notifications
                </div>
            </div>
        </div> 
    )
}

export default Navbar