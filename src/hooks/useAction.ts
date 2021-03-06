import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from "../redux/action-creator/index";


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch);
}