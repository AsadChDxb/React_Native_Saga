import { RECEIVE_API_DATA } from '../../Actions';

export default (state ={}, {type,data} )=> {
    switch (type) {
        case RECEIVE_API_DATA:
        
        return {
        ...state,
        data
        }
        default:
            return state;
    }
};