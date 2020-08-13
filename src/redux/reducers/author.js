import {
    getAuthorAction,
    postAuthorAction,
    putAuthorAction,
    deleteAuthorAction,
    pending,
    rejected,
    fulfilled,
} from '../actions/actionTypes';
const initialValue = {
    response: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: {},
};

const author = (prevState = initialValue, action) => {
    switch (action.type) {
        case getAuthorAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case getAuthorAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message,
            };
        case getAuthorAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isFulfilled: true,
                response: action.payload.data.data,
            };
        case postAuthorAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case postAuthorAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message,
            };
        case postAuthorAction + fulfilled:
            prevState.response.push(action.payload.data.data);
            return {
                ...prevState,
                isLoading: false,
                isFulfilled: true,
                response: prevState.response,
            };
        case putAuthorAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case putAuthorAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message,
            };
        case putAuthorAction + fulfilled:
            const edited = prevState.response.map(author => {
                if(author.id === action.payload.data.data.id) {
                    return action.payload.data.data;
                }
                return author;
            });
            return {
                ...prevState,
                isLoading: false,
                isFulfilled: true,
                response: edited,
            };
        case deleteAuthorAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case deleteAuthorAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message,
            };
        case deleteAuthorAction + fulfilled:
            const deleted = prevState.response.filter(author => author.id !== action.payload.data.data.id);
            return {
                ...prevState,
                isLoading: false,
                isFulfilled: true,
                response: deleted,
            };
        default:
            return {
                ...prevState,
            };
    };
};

export default author;
