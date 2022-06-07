import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../redux/store/actionCreators/user'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreators, dispatch)
}