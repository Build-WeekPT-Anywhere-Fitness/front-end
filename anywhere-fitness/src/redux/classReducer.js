// import { LOAD_CLASS, CLASS_FAIL, FETCH_CLASSES } from '../actions/types'

// const initialState = {
//     classes: [],
//     error: null,
//     isLoading: false
// }

// export const classReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_CLASSES:
//             return { ...state, isLoading: false, classes: [action.payload] }
//         case CLASS_FAIL:
//             return { ...state, isLoading: false, error: action.payload.message }
//         case LOAD_CLASS:
//             return { ...state, isLoading: true }
//         default:
//             return state
//     }
// }

// export default classReducer