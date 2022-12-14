import { Link } from 'react-router-dom';
import './style.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import LoaderComponent from '../loader/loader'


function Dashboard(props){

  const [userData,setUserData]= useState(
            {
        username : 'not signed in',
        email : 'not available',
        profilePicture : (require('../../assets/profilepicturesSmall.png'))}
        );
    
  const toggleColorSelect = (i)=>{
    const dashLink = document.querySelectorAll('#dash-link');    
    dashLink[i].style.color='var(--green)';
    dashLink[i].style.transform = 'translateX(5px)';
  }

  const removeAlert=()=>{
    const alertBox = document.querySelector('#alert-box');
    alertBox.style.display='none';
  }
        
  
   useEffect(()=>{
        if(props.currentUser ){
        setUserData(props.currentUser);
       
       } 
       toggleColorSelect(props.dashIndex)
    },[])

    return(
       <div className='dasboard-wrapper'>
        <div className="Dashboard">
            <div className='title-dashboard'>
            <Link to='./' id='title-link'>
                <div className='app-title'>Friendface</div>
            </Link>
            </div>
            <div className='links-cont'>
                <div id='home-tabs'>
                    <Link to='/home' id='link-cont' >
                        <div  id='dash-link'>Home</div>
                        <span id='link-icon' class="material-symbols-outlined">cottage</span>
                        </Link>
                </div>
                <div id='explore-tabs'>
                    <Link to='/' id='link-cont' >
                        <div  id='dash-link'>Explore</div>
                        <span id='link-icon' class="material-symbols-outlined">explore</span>
                        </Link>
                </div>
                <div id='profile-tabs'>
                    <Link to='/profile' id='link-cont' >
                        <div  id='dash-link'>Profile</div>
                        <span id='link-icon' class="material-symbols-outlined">account_circle</span>
                    </Link>
                </div>
                <div id='message-tabs'>
                    <Link to='/message' id='link-cont' >
                        <div  id='dash-link'>Message</div>
                        <span id='link-icon' class="material-symbols-outlined">forum</span>
                    </Link>
                </div>
                <div id='notification-tabs'>
                    <Link to='/notification' id='link-cont' >
                        <div  id='dash-link'>Notification</div>
                        <span id='link-icon' class="material-symbols-outlined">notifications_active</span>
                    </Link>
                </div>
                <div>
                    <Link to='/login' id='link-cont' className='sign-links'>
                        <div id='dash-link'>Sign in/out</div>
                        <span id='link-icon' class="material-symbols-outlined">login</span>
                    </Link>
                </div>
            </div>
            <div className='dashboard-bottom'>
                <div className='profPic-cont'>
                    <img id='profileImgDash'
                     src= {props.currentUser?.profilePicture ? `https://odin-book-api-production.up.railway.app/${props.currentUser.profilePicture} `
                     : (require('../../assets/profilepicturesSmall.png'))} 
                      alt='profilePicture'
                        width={75} height={75}/>
                </div>
                <div className='profInfo-cont'>
                    <div className='profileInfoDash'>
                        <div className='currentUser-username'>{userData?.username ? userData.username : 'no username'}</div>
                        <div className='currentUser-email'>{userData ? userData.email : 'Not Sign in'}</div>    
                    </div>
                   
                </div>
            </div>
            <div id='alert-box' onClick={removeAlert}>
                <div id='alert-content'>
                <span id='link-icon' class="material-symbols-outlined">notifications_active</span>
                <div id='alert-msg'>test message</div>
                </div>
            </div>
        </div>
        <LoaderComponent/>
    </div>
    )
}

export default Dashboard;