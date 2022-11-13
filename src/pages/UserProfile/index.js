import './style.css';
import { Link, useParams } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard';
import Sidebar from '../../components/sidebar/sidebar';
import { useState, useEffect } from 'react';
import ProfileForm from '../../components/profileForm';
import ImageForm from '../../components/imageForm';



export function UserProfilePage(props) {
  
  const [postData,setPostData]= useState([]);
  const [userData,setUserData]= useState(
    { username : 'loading',
      email : 'loading' , profilePicture : ''});

   let {userId} = useParams(); 
    console.log(userId)

  
   const fetchPostData = async ()=>{
    const url=`http://localhost:5000/posts/${userId}`;
    const response = await fetch(url);
    var data = await response.json();
    setPostData(data);
    }

    const fetchUserData = async ()=>{
        const url=`http://localhost:5000/users/${userId}`;
        const response = await fetch(url);
        var data = await response.json();
        console.log(data)
        setUserData(data[0]);
        }
    
   
    
    const toggleForm = (form)=>{
      const Form = document.querySelector(`#${form}`);
      if(Form.style.display === 'inline'){
          Form.style.display ='none';
      } else{  Form.style.display='inline'}
  } 

    useEffect(()=>{
      fetchPostData();
      fetchUserData();
      
    },[])


  return (
    <div className="App">
      <Dashboard currentUser={props.currentUser} dashIndex={1} />
      <div className='main' id='profile-main'>
        <div className='profile-head'>
          <div className='profile-pic-cont'>
          <img id='profileImgProfile' src= {userData?.profilePicture ? `http://localhost:5000/${userData.profilePicture} `
                     : (require('../../assets/profilepicturesSmall.png'))} alt='userPicture'
                      width={100} height={100}/>
           
            <div id ='imageForm'>
            <ImageForm />
            </div>
          </div>

          <div className='profile-detail'>
            <div className='profile-row1'>
              <div>Username :  {userData.username } </div>
              <div>Email : {userData.email} </div>
             
              <div id='profileForm'>
                Add as friend
              </div>
             
            </div>
            <div className='profile-row2'>
              <div>Friend</div>
              <div></div>
            </div>
            <div className='profile-row3'>
              botton panel
            </div>
          </div>
        </div>

        <div className='profile-body'>

        <div className='displayPostCont'>
          {postData.map(function(item,index){
            return(
              <div className='post-container'>
                <div className='post-sidebar'>    
                  <img  id='profileImg' src={item.author ?  `http://localhost:5000/${item.author.profilePicture} `
                     : (require('../../assets/profilepicturesSmall.png'))}
                   alt='profileImage'  width={50} height={50}/>
                </div>
                <div className='post-main'>
                  <div className='post-text'>{item.text}</div>
                  <div className='post-author'>{item.author ? item.author.username : 'anon'}</div>
                  <div className='post-date'>{item.date}</div>
                  <div className='action-cont'>
                    <div>
                        <span id='like-icon' class="material-symbols-outlined">favorite</span>
                        <div>{item.likes.length}</div>
                    </div>
                    <span id='comment-icon' class="material-symbols-outlined">mode_comment</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        </div>
      </div>
      
      <Sidebar/>
    </div>
  );
}
