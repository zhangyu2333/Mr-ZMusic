import { handleActions } from 'redux-actions'
import { RECOMMEND_DATA,LIST_DATA,SEARCH_DATA } from '../types/counter'

export default handleActions({
	[RECOMMEND_DATA](state,action){
		return {
			...state,
			recommend:action.payload
		}
	},
	[LIST_DATA](state,action){
		return {
			...state,
			list:action.payload
		}
	},
	[SEARCH_DATA](state,action){
		return {
			...state,
			search:action.payload
		}
	}
},{
	recommend:{},
	list:{},
	search:{}
})