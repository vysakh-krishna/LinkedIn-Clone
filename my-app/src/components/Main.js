import React from 'react'
import Home from './Home'
import Network from './Network';
function Main(props) {
    if(props.content==='Home'){
        return(
            <div>
                <Home/>
            </div>
        );
    }
    else if(props.content==='My Network'){
        return(
            <div>
                <Network/>
            </div>
        );
    }
    else if(props.content==='Jobs'){
        return(<div>Jobs</div>);
    }
    else if(props.content==='Messaging'){
        return(<div>Messaging</div>);
    }
    else if(props.content==='Notifications'){
        return(<div>Notifications</div>);
    }
}

export default Main
