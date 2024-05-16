import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

export const Login = () => {
    let { isLoggedIn , setIsLoggedIn } = useContext(AuthContext) ;
    let [ dataEP , setDataEP ] = useState({ email : "" , password : "" }) ;

    useEffect(()=>{
        console.log("login status : ", isLoggedIn) ;
    },[isLoggedIn]) 

    function handleClick(e){
        e.preventDefault() ;
        if(dataEP.email!="" && dataEP.password!=""){
            // console.log(dataEP) ;
            axios.post(`https://reqres.in/api/login`, dataEP)
            .then(res=>{ 
                // console.log(res, "\n", res.status)
                if(res.status==200){
                    setIsLoggedIn(true) ;
                    localStorage.setItem("isLoggedIn", JSON.stringify(true)) ;
                }
              })
            .catch(err=>console.log(err))
        }
    }
    function handleLogout(e){
        e.preventDefault();
        setIsLoggedIn(false) ;
        localStorage.setItem("isLoggedIn", JSON.stringify(false)) ;
    }
  return (
    <Box bg={'lightgreen'} height={'76vh'} paddingTop={30} textAlign={'center'}> 
        <Flex direction={'column'} boxShadow={'1px 1px 1px 1px lightgrey'} bg={'white'} width={'fit-content'} textAlign={'center'} padding={30} margin={'auto'} borderRadius={20} marginBottom={15}>
           <Heading size={'3xl'} >
            Form
            </Heading>
            <Box>
            {
                isLoggedIn && <Box>
                    <Heading size={'2xl'} color={'gray'}>Login Status :<span style={{color:"blueviolet"}}> {`${isLoggedIn}`}</span></Heading>
                <Button  border={'none'} width={'fit-content'} borderRadius={12} paddingTop={8} paddingBottom={8} textAlign={'center'} bg={'red'} color={'white'} margin={'auto'} marginTop={10} marginBottom={10} paddingLeft={20} paddingRight={20} fontSize={18} onClick={handleLogout}>Logout</Button>
                </Box>
             }
             </Box>

            { !isLoggedIn &&
            <Box display={'flex'} flexDirection={'column'}>
                <Input type='email' placeholder={'email'} width={250} borderRadius={12} padding={8} fontSize={16} textAlign={'center'} margin={'auto'} marginTop={10} marginBottom={10} onChange={(e)=>setDataEP({...dataEP, email : e.target.value})}/>
                <Input type='password' placeholder={'password'} width={250} padding={8} borderRadius={12} fontSize={16} textAlign={'center'} margin={'auto'} marginTop={10} marginBottom={10} onChange={(e)=>setDataEP({...dataEP , password : e.target.value})}/>
                <Button border={'none'} width={'fit-content'} borderRadius={12} paddingTop={8} paddingBottom={8} textAlign={'center'} bg={'blue'} color={'white'} margin={'auto'} marginTop={10} marginBottom={10} paddingLeft={20} paddingRight={20} fontSize={18} onClick={handleClick} >Login</Button>
            </Box>
             }
             
        </Flex>
    </Box>
  )
}
