import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  
  let { isLoggedIn , setIsLoggedIn } = useContext(AuthContext) ;

  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} fontSize={28} bg={'black'} paddingRight={40} letterSpacing={'1px'} fontWeight={600}>
        <Img width={300} height={150} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSjfQuVOOQrMwaDZBCzQ7vYSacKwjUsU8nQ&s' alt='image-logo'/>
        <NavLink to='/' style={({isActive})=> isActive ? {color : "red" , textDecoration:"none" } : {color : "blue" , textDecoration:"none"}}>Home</NavLink>
        <NavLink to='/login' style={({isActive})=> isActive ? {color : "red" , textDecoration:"none" } : {color : "blue" , textDecoration:"none"}}>{isLoggedIn? "Logout" : "Login" }</NavLink>
    </Box>
  )
}
