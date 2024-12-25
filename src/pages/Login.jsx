import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }

    // Initialize Google Sign-In only after component mounts
    const initializeGoogleSignIn = () => {
      console.log('initializeGoogleSignIn loaded')
      if (typeof google !== 'undefined') {
        console.error('Google Sign-In script is loaded successfully.')
        function handleCredentialResponse(response) {
          // Send the token to your backend to verify and handle the login process
          axios
            .post(import.meta.env.VITE_BACKEND_URL + '/api/user/callback', {
              token: response.credential,
            })
            .then((res) => {
              console.log('Backend response:', res);
              // Handle the success response, store the token, etc.
              if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
                navigate('/');  // Redirect to the homepage or dashboard after successful login
              } else {
                toast.error('Failed to authenticate with Google');
              }
            })
            .catch((error) => {
              console.error('Error during Google sign-in:', error);
              toast.error('Error during Google sign-in');
            });
          }
        const clientId = '969886296841-a0fr5bnv2rrt22bptihti8o9cabsghh8.apps.googleusercontent.com';

        google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse
        })

        google.accounts.id.renderButton(
          document.getElementById('g_id_signin'),
          { theme: 'outline', size: 'large' }
        )

        google.accounts.id.prompt() // Automatically show prompt
      } else {
        console.error('Google Sign-In script is not loaded properly.')
      }
    }

    // Dynamically load the Google Sign-In script
    const script = document.createElement('script')
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    script.onload = initializeGoogleSignIn
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Clean up when component unmounts
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
        )}
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div id="g_id_signin"></div>
        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
