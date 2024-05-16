export const LOADING = "fetch/loading" ;
export const SUCCESS = "fetch/success" ;
export const ERROR = "fetch/error" ;
export const PREVIOUS = "index/previos" ;
export const NEXT = "index/next" ;

export const errorType = ()=>{
    return { type : ERROR } ;
}

export const loadingType = () =>{
    return { type : LOADING } ;
}

export const successType = (data) =>{
    return { type : SUCCESS , payload : data } ;
} 

export const previousType = (quesNo)=>{
    return { type : PREVIOUS , payload : quesNo } ;
}

export const nextType = (quesNo, lastQuesNo) =>{
    return { type : NEXT , payload : { current : quesNo , last : lastQuesNo } } ;
}

export const fetchData = ()=> async(dispatch)=>{
    try{
        
        dispatch(loadingType()) ;

        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`) ;
        let data = await res.json() ;
        data = data.data ;
        // console.log(data) ;
        dispatch(successType(data)) ;

    }catch(err){
        dispatch(errorType()) ;
    }
}