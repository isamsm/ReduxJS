//import redux e create store
const redux = require('redux')
const createStore = redux.createStore

//actions e actions type
//actions type -> tipo ação
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

//actions
const changeUser = (user) => {
    return {
        type: CHANGE_USER,
        info: 'Change the current user',
        payload: user
    }
}

const logout = () => {
    return {
        type: LOGOUT,
        info: 'Logout current user',
    }
}

const initialState = {
    user: '',
    isLogged: false,
}

//reducers
const userReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true,
            }
        case LOGOUT: 
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}

//store

const store = createStore(userReducer);

console.log('Initial state', store.getState())

store.dispatch(changeUser('isamsm'))
console.log('New state', store.getState())

store.dispatch(logout())
console.log('New state', store.getState())