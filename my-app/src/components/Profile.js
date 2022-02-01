import React from 'react'

function profile() {
    return (
        <div style={{backgroundColor: 'white',width: 200,borderRadius: '5px',marginBottom:5}}>
            <div style={{textAlign: 'center',padding: '0px 10px 15px', borderBottom:'1px solid wheat'}}>
                <div style={{backgroundColor: 'grey',height: '55px',margin:'-10px -10px 0px',borderRadius: '5px' ,}}></div>
                <div style={{backgroundColor:'' ,margin: '-5px -10px 0px'}}>
                    <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Profile" style={{height:80,width:80,borderRadius: '40px', margin:'-40px 0px 15px 0px'}}/>
                </div>
                <span style={{}}><strong>Vysakh K R</strong></span>
                <div style={{fontSize:15, marginTop:5}}>
                Student at THUNCHATH EZHUTHACHAN COLLEGE, ELAVANCHERY, NEMMARA
                </div>
            </div>
            <div style={{display: 'flex',padding: '10px',fontFamily:'Helvetica',flexDirection: 'row',borderBottom: '1px solid wheat'}}>
                <div style={{flex:1}}>
                    <span style={{fontSize:12,display: 'inline-block'}}>connections</span>
                    <br/>
                    <span style={{fontSize:12}}>Grow your network</span>
                </div>
                <span style={{fontSize:12,color:'blue'}}>28</span>
            </div>
            <div style={{display: 'flex',padding: '10px',alignItems:"center",fontSize:12}}>
                <div style={{padding: '10px'}}>
                    <img src="bookmark.png" alt="bookmark" style={{width:10,height:15}}/>
                </div>
                <div style={{fontFamily:'Helvetica'}}>
                    <span><strong>My items</strong></span>
                </div>
            </div>
        </div>
    )
}

export default profile
