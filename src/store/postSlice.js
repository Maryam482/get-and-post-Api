import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data,thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')        
        return await response.json();
    },
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringyfy({
//             title: 'foo',
//             body:'bar',
//             userId: 1,

//         }),
//         headers: {
//             'Content-type' : 'application/json; charset = UTF-8',
//         },
//     })
);
 
const postSlice = createSlice({
    name: 'post',
    initialState:{ 
        // todos :[{title:'buy milk', id:1}],
        posts:[]

    },
   /*  reducers: {
        addtodo: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            let {id, title} = newObj
  
            state.todos =  [...state.todos, newObj]
       
         

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
  
        
        deletetodo: {
            reducer(state, action){
                console.log(action.payload.id)
                // let newState1 = state.filter(item=>item.id!=action.payload.id)
                state.todos = state.todos.filter(item=>item.id!=action.payload.id)
                
    
            },
            prepare(id){
                return {payload: {id}}
            }
        }
       
 
    }, */
    extraReducers: {
        [fetchPost.fulfilled] : (state, action) => {
           console.log(action.payload)
           console.log(action.payload.slice(0,10))
           state.posts = action.payload.slice(0,10)
        }
    }

})


// export const { addtodo, deletetodo } = todoSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer