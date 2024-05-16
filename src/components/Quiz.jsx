import { Box, Checkbox, Heading, Input , Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState  } from 'react'
import { useNavigate } from "react-router-dom" ;
import { useDispatch, useSelector } from 'react-redux' ;
import { fetchData, nextType, previousType } from '../store/actionTypes';
import { AuthContext } from '../context/AuthContext';

export const Quiz = () => {
  let dispatch = useDispatch() ;
  let quizData = useSelector(state=>state.quiz) ;
  let quesNoFind = useSelector(state=>state.index) ;
  let { isLoggedIn , setIsLoggedIn} = useContext(AuthContext) ;
  let { finalMarksOfQuizExam , setFinalMarksOfQuizExam } = useContext(AuthContext) ;
  let initialArr = [] ;
  
  let navigate = useNavigate() ;

  useEffect(()=>{
   if(isLoggedIn) {
    dispatch(fetchData()) ;
    // console.log("data of quiz is : ", quizData) ;
    
     for(let i=0;i<quizData.data?.length;i++){
        initialArr[i] = 0 ; 
      }
   }
   
  },[])


  let [arrMarksQues, setArrMarksQues] = useState(initialArr) ;
  
  useEffect(()=>{
    // console.log("marks of current chosen option is ", arrMarksQues[quesNoFind.data]) ;
  },[arrMarksQues])
  
  
  function handlePreviousClick(){
    // console.log(quesNoFind.data) ;
    dispatch(previousType(quesNoFind.data)) ;
  }
  function handleNextClick(){
  //  console.log(quesNoFind.data) ;
  //  console.log(quizData.data.length) ;
   dispatch(nextType(quesNoFind.data , quizData.data.length)) ;
  }
  function handleRadioClick(e){

    arrMarksQues[quesNoFind.data] = 0 ;

    if(Number(e.target.value)==Number(quizData.data[quesNoFind.data]?.correctOptionIndex)){
     
      arrMarksQues[quesNoFind.data] = 1 ;
    }

  }
  function handleEndQuiz(){
    let totalMarksOfQuiz = arrMarksQues.reduce((acc,cur)=>{  return acc+cur},0) ;
    console.log("final marks is : ", totalMarksOfQuiz ) ;
    setFinalMarksOfQuizExam(totalMarksOfQuiz) ;
    setTimeout(()=>{
      navigate("/result") ;
    },1000) ;
     
  }

  return (
    <Box bg={'lightgrey'} height={'76vh'} paddingTop={30} textAlign={'center'}> 
        <Heading as={'h1'} size={'4xl'}>Quiz 
        <Button bg={'red'} color={'white'} float={'right'} padding={12} fontSize={18} marginRight={"5%"} border={'none'} borderRadius={8} onClick={()=>handleEndQuiz()}>End Quiz</Button>
        
        </Heading>
      
        
        <Box boxShadow={'1px 1px 1px 1px lightyellow'} width={'fit-content'} padding={30} bg={'whitesmoke'} margin={'auto'} textAlign={'center'}>
           
            
              { quizData.isLoading && !quizData.isError && <Heading as={'h2'}>Loading...</Heading> }
              {  !quizData.isLoading && !quizData.isError && 
                 <>
                    <Box textAlign={'left'}>
                      <Heading as={'h2'}>Q. {quizData.data[quesNoFind.data]?.id} &nbsp; {quizData.data[quesNoFind.data]?.question}</Heading>
                      <ul style={{textAlign:"left", fontSize:"23px", letterSpacing:"1px" }} >
                      {
                          quizData.data[quesNoFind.data]?.options.map((opt,i)=><li style={{marginTop:"5px" , listStyle:"none"}} key={`${quizData.data[quesNoFind.data]?.id}-${opt}`}>&nbsp;&nbsp;
                          <Input type='radio' name="option" width={20} height={16} alignItems={'center'} onChange={(e)=>handleRadioClick(e)} value={i}/> &nbsp;&nbsp;
                          <label name="option">{opt}</label>
                          </li>)
                      }  
                      </ul>
                      <br/><br/><br/><br/>
                      <Box textAlign={'center'} >
                      <Button marginRight={"10%"} fontSize={22} padding={10} color={'white'} fontWeight={600} bg={'lightgrey'} borderRadius={12} border={'none'} onClick={()=>handlePreviousClick()}>Previous</Button>
                      <Button marginLeft={"10%"} padding={10} fontSize={22} color={'white'} bg={'lightsteelblue'} borderRadius={12} border={'none'} onClick={()=>handleNextClick()}>Next</Button>
                      </Box>
                    </Box>
                 </>
              }
                 </Box>
                 
    </Box>
  )
}
