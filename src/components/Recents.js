import React from 'react'

function Recents() {
    return (
        <div style={{backgroundColor:'white',padding:10, borderRadius:'5px',position:'sticky',top:60}}>
            <div style={{}}>
                Recent
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>music</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>branding</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>futurism</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>medicine</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>startups</span>
                </div>
                <br/>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:14,color:'#00ade8'}}>Groups</span>
                </div>
                <div style={{alignItems: 'center',display: 'flex'}}>
                    <span style={{fontSize:14,flex:1,color:'#00ade8'}}>Events</span>
                    <span style={{fontSize:20}}>+</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:14,color:'#00ade8'}}>Followed Hashtags</span>
                </div>
                <br/>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>music</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>branding</span>
                </div>
                <div style={{alignItems: 'center'}}>
                    <span style={{fontSize:'15px'}}><strong style={{padding:5}}>#</strong></span>
                    <span style={{fontSize:13}}>futurism</span>
                </div>
                <br/>
            </div>
            <div style={{textAlign: 'center',margin:'0px -10px -10px -10px', borderTop: '1px solid wheat',padding: '10px'}}>
                <strong>Discover more</strong>
            </div>
        </div>
    )
}

export default Recents
