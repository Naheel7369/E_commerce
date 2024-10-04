import { configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Redux/Slic'
import  authReducer from '../Redux/AuthSlice'

export default configureStore({
  reducer: {
    cart:cartReducer,
   auth:  authReducer,
  },
})
