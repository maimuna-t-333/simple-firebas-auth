import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../../firebase/firsebase';

const Login = () => {
    const [user, setUser]=useState(null);

    const provider= new GoogleAuthProvider;
    const githubProvider=new GithubAuthProvider;

    const handleGoogleSihnIn=()=>{
        console.log('google sign in');
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user )

        })
        .catch(error=>{
            console.log(error)
        })

    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('sign out completed');
            setUser(null)
        }).catch(error=>{console.log(error)})
    }
    const handleSignInGithub=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const loggedInUser=result.user
            console.log(loggedInUser)
            if(!loggedInUser.email && loggedInUser?.providerData?.length){
                console.log('user email not directly provided',loggedInUser.providerData)
              
                }
                setUser(loggedInUser)
            
            
        })
        .catch(error=>{
            console.log(error)
        })
        


    }
    return (
        <div>
            <h2>Please login</h2>
            {/* <button onClick={handleGoogleSihnIn}>Sign In with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user? <button onClick={handleSignOut}>Sign Out</button> :
                <>
                <button onClick={handleGoogleSihnIn}>Sign In with Google</button>
                <button onClick={handleSignInGithub}>Sign in with github</button>
                </>
                
            }
            {
                user &&  <div>
                <p>User name:  {user.displayName}</p>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>

            }
           
        </div>
    );
};

export default Login;