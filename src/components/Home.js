import React from 'react'
import Post from './Post'
import Profile from './Profile'
import Recents from './Recents'
function Home() {
    return (
        <div style={{display: 'flex',justifyContent: 'center',marginTop:10}}>
            <div style={{padding: '10px'}}>
                <Profile/>
                <Recents/>
            </div>
            <div>
            <Post 
            author={{name: 'Samiksha Suvarna', avatar: "avatar.jpg", title :"Lighting trainee at DNEG"}}
            content='Architectural Design Visualisation
            Modeling, Texturing, and Lighting in Maya Arnold
            day and night lighting.'
            time='1d'
            image='avatar.jpg'
            likes='100'
            />
            <Post 
            author={{name: 'Samiksha Suvarna', avatar: "avatar.jpg", title :"Lighting trainee at DNEG"}}
            content='Architectural Design Visualisation
            Modeling, Texturing, and Lighting in Maya Arnold
            day and night lighting.'
            time='1d'
            image='avatar.jpg'
            likes='100'
            />
            <Post 
            author={{name: 'Samiksha Suvarna', avatar: "avatar.jpg", title :"Lighting trainee at DNEG"}}
            content='Architectural Design Visualisation
            Modeling, Texturing, and Lighting in Maya Arnold
            day and night lighting.'
            time='1d'
            image='avatar.jpg'
            likes='100'
            />
            <Post 
            author={{name: 'Samiksha Suvarna', avatar: "avatar.jpg", title :"Lighting trainee at DNEG"}}
            content='Architectural Design Visualisation
            Modeling, Texturing, and Lighting in Maya Arnold
            day and night lighting.'
            time='1d'
            image='avatar.jpg'
            likes='100'
            />
            <Post 
            author={{name: 'Samiksha Suvarna', avatar: "avatar.jpg", title :"Lighting trainee at DNEG"}}
            content='Architectural Design Visualisation
            Modeling, Texturing, and Lighting in Maya Arnold
            day and night lighting.'
            time='1d'
            image='avatar.jpg'
            likes='100'
            />
            
            </div>
            <div style={{padding: '10px'}}>
            <Profile/>
            </div>
        </div>
    )
}

export default Home
