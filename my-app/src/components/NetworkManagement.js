import React from 'react';
import {useState} from 'react';

const show={
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',  
}
const hide={
  flexDirection: 'row',
  alignItems: 'center',
  display:'none'
}
const button={
  border: 'none',
  padding: '5px',
  borderRadius:5,
  backgroundColor:'#c4c4c4'
}
function NetworkManagement() {
    const [moreless, setMoreless] = useState("Show more");
    const [display, setDisplay] = useState(hide);
    function change(){
      if(moreless==='Show more'){
        setDisplay(show);
        setMoreless("Show less");
      }
      else{
        setDisplay(hide);
        setMoreless("Show more");
      }
    }
  return (
  <div style={{width:350,backgroundColor: 'white',borderRadius:'5px',position:'sticky',top:60}}>
      <div style={{padding: '10px',borderBottom:'1px solid wheat'}}>
        <div style={{marginBottom:5}}><strong>Manage my network</strong></div>
        <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center',}}>
          <div style={{padding: '5px'}}>
            <img src="connection.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Connections
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center',} }>
          <div style={{padding: '5px'}}>
            <img src="notebook-of-contacts.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Contacts
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center',}}>
          <div style={{padding: '5px'}}>
            <img src="follower.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              People I follow
          </div>
        </div>
        <div className="show" style={display} >
          <div style={{padding: '5px'}}>
            <img src="multiple-users-silhouette.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Groups
          </div>
        </div>
        <div className="show" style={display}>
          <div style={{padding: '5px'}}>
            <img src="calendar.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Events
          </div>
        </div>
        <div className="show" style={display}>
          <div style={{padding: '5px'}}>
            <img src="page.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Pages
          </div>
        </div>
        <div className="show" style={display}>
          <div style={{padding: '5px'}}>
            <img src="newsletter.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Newsletters
          </div>
        </div>
        <div className="show" style={display}>
          <div style={{padding: '5px'}}>
            <img src="hashtags.png" alt="bookmark" style={{width:20,height:20}}/>
          </div>
          <div style={{marginLeft: '10px'}}>
              Hashtags
          </div>
        </div>
        <button onClick={()=>change()} style={button}>{moreless}</button>
      </div>
      <div style={{padding: '5px',borderBottom:'1px solid wheat',textAlign:'center',color:'#00beff'}}>
        Grow your network
      </div>
      <div style={{padding: '5px',margin:5,display: 'flex',flexDirection:'row',flexWrap:'wrap',justifyContent: 'center'}}>
        <div  style={{padding: '5px',}}>
            About
        </div>
        <div  style={{padding: '5px',}}>
            Accessibility
        </div>
        <div style={{padding: '5px',}}>
            Help Center
        </div>
        <div style={{padding: '5px',}}>
            Privacy and Terms
        </div>
        <div style={{padding: '5px',}}>
            Ad choices
        </div>
        <div style={{padding: '5px',}}>
            Advertising
        </div>
        <div style={{padding: '5px',}}>
            Bussiness Services
        </div>
        <div style={{padding: '5px',}}>
            Get the Linkedin app
        </div>
        <div style={{padding: '5px',}}>
            More
        </div>
      </div>
      <div>
        
      </div>
  </div>
  )
}

export default NetworkManagement;
