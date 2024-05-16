import { Box, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useDispatch , useSelector } from 'react-redux'

export const Result = () => {
  let dispatch = useDispatch() ;
  let quizData = useSelector(state=>state.quiz) ;
  let { finalMarksOfQuizExam , setFinalMarksOfQuizExam } = useContext(AuthContext) ;
  
  return (
    <Box paddingTop={30} textAlign={'center'}> 
    <Heading as={'h1'} size={'4xl'} fontSize={40} textDecoration={'underline'} color={'gray'}>Result</Heading>
    <br/>
    <Heading color={'red'} fontSize={30}>Score : {finalMarksOfQuizExam} </Heading>
    <br/>

    <Box textAlign={'left'} padding={20}>
        {
          quizData.data?.map(ele=>{
            return (
              <Box key={ele.id}>
                       <Heading as={'h2'}>Q. {ele.id} {ele.question}</Heading>
                       <ol>
                           {
                            ele.options?.map((opt, i)=>{
                              return (
                                <li key={`${ele.id}-${opt}`}>&nbsp;&nbsp;&nbsp;{opt}</li>
                              )
                            })
                           }
                       </ol>
                       
                       <Heading as={'h3'} color={'green'} marginTop={10} marginBottom={30} marginLeft={"5%"}>Correct option is : {Number(ele.correctOptionIndex)+1}</Heading>
                       
              </Box>
            )
          })
        }
    </Box>

    </Box>
  )
}
