import { ERROR, LOADING, NEXT, PREVIOUS, SUCCESS } from "./actionTypes";

export const quizReducer= (state={ data : [] , isLoading : false , isError : false },action)=>{
    switch(action.type){
        case LOADING : return { ...state , isLoading : true , isError : false } ;
        case SUCCESS : return { isLoading : false , isError : false , data : action.payload } ;
        case ERROR : return { ...state , isError : true , isLoading : false } ;
        default : return state ;
    }
}

export const indexReducer = (state={data:0},action)=>{
    switch(action.type){
        case PREVIOUS : 
                        if(Number(action.payload)<=0){
                             return { data : 0 } ;
                        } 
                        else {
                            let prev = Number(action.payload) - 1 ;
                            return { data : prev } ;
                        }
        case NEXT :  
                        if((Number(action.payload.current))>=(Number(action.payload.last)-1))
                        { 
                            return { data : action.payload.last-1 } ;
                        }
                        else {
                            let nextQues = Number(action.payload.current) + 1 ;
                            return { data : nextQues } ; 
                        }
        default :  return state ;
    }
}