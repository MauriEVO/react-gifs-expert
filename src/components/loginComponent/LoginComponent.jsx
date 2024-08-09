import { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));


function LoginComponent() {
  const [data, setData] = useState(null);

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);


  // AUTENTICACIÓN FACEBOOK
  const responseFacebook = (response) =>{
    console.log(response);
    if(response.accessToken){
      setData({
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      })
    }
  }
  // AUTENTICACIÓN CON GOOGLE
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            setProfile(res.data);
            console.log("data assigned");
            console.log(res.data);

        })
        .catch((err) => console.log(err));
    }
  },[user]);

  return (
    <>
      <div className="wrap_avatar">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar 
            alt={(data && (data.name))} 
            src={(data && (data.picture))} 
            sx={{ width: 100, height: 100 }}
          />
        </StyledBadge>
      </div>
      <div className="card">
        <FacebookLogin
          appId="358134537084144"
          autoLoad={false}
          fields="name,email,picture"
          textButton="Login Facebook"
          icon="fa-facebook"
          // onClick={componentClicked}
          callback={responseFacebook} />
      </div>
 
    
      <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          {profile ? (
              <div>
                  <img src={profile.picture} alt="user image" />
                  <h3>User Logged in</h3>
                  <p>Name: {profile.name}</p>
                  <p>Email Address: {profile.email}</p>
                  <br />
                  <br />
                  <button onClick={logOut}>Log out</button>
              </div>
          ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
          )}
      </div>

    </>
  )
}

export default LoginComponent
