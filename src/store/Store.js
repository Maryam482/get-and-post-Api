import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'

const Store = configureStore ({
    reducer : postReducer
})
export default Store;