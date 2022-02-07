import React from 'react';
import NetworkManagement from './NetworkManagement';
import YouMayKnow from './YouMayKnow';

function Network() {
  return (
  <div style={{display: 'flex', justifyContent: 'center',marginTop:10}}>
    <div style={{padding: '0px 10px 10px'}}>
      <NetworkManagement/>
    </div>
      <YouMayKnow/>
  </div>
  )
}

export default Network;
