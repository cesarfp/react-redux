const initialState = {
	counter:0,
	results:[]
}

const reducer = (state = initialState, action) => {

	switch(action.type){
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			}
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.val
			}
		case 'SUBSTRACT':
			return {
				...state,
				counter: state.counter - action.val
			}
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat({id:new Date(),value:state.counter})

			}
		case 'DELETE_RESULT':
			
			const updatedArray = state.results.filter(results => results.id !== action.resultElId)
			return {
				...state,
				results:updatedArray
			}
		
		default:
			return state
	}

}

export default reducer