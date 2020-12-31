import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux'
import {addtodo, fetchPost} from './store/postSlice'
import { v4 as uuidv4 } from 'uuid'
import Viewpost from './Viewpost'
function Addpost() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
        
    }, [])
    return (
        <div>
             {/* <button onClick={() => dispatch(fetchPost())}>Call Api</button> */}
             <Viewpost/>
        </div>
    )
}

export default Addpost
