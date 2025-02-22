import React from 'react'
import { Link } from 'react-router-dom'
//import user from 'C:\Users\reckless\Code\Stellar\frontend\src\assets\user.svg';
// import logo from '..\navigation-svgrepo-com.svg';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/api/map' },
  { name: 'Camera', path: '/api/cam' },
  { name: 'User', path: '/auth/user' },
]

const Navbar = () => {
  return (
    <div className=' w-full h-16 bg-gray-800 text-white flex items-center justify-between'>

      <div className='text-2xl font-bold ml-4'>NAVI</div>
      <div className='flex items-center'>
        <div className='mr-4'><Link to ="/">Home</Link></div>
        <div className='mr-4'><Link to ="/api/map">Map</Link></div>
        <div className='mr-4'><Link to ="/api/cam">AR View</Link></div>
        {/* <div className='mr-4'><Link to ="/auth/user"><img src={myuser} alt="My Icon" /></Link></div> */}
      </div>
    </div>
  )
}

export default Navbar