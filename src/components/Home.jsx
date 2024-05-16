import { Box, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/actionTypes'
import { AuthContext } from '../context/AuthContext'

export const Home = () => {
  let dispatch = useDispatch() ;
  let quizData = useSelector(state=>state.quiz) ;
  let { isLoggedIn, setIsLoggedIn} = useContext(AuthContext) ;
  let { finalMarksOfQuizExam , setFinalMarksOfQuizExam } = useContext(AuthContext) ;
    
    let navigate = useNavigate() ;
    function funcNavigate(){
      setFinalMarksOfQuizExam(0) ;
      // if(isLoggedIn)
      //  dispatch(fetchData()) ;
        navigate("/quiz" ) ;
    }
  return (
    <Box bg={'lightsteelblue'} height={'76vh'} paddingTop={30} textAlign={'center'}> 
        
        <br/>
        <Button  border={'none'} width={'fit-content'} borderRadius={12} paddingTop={10} paddingBottom={10} textAlign={'center'} bg={'red'} color={'white'} margin={'auto'} marginTop={100} marginBottom={10} paddingLeft={20} paddingRight={20} fontSize={20} onClick={funcNavigate} >Start Quiz</Button>
    </Box>
  )
}
