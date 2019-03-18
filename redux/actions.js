// actions types
export const RECEIVE_PLAYGROUNDS = 'RECEIVE_PLAYGROUNDS';
export const CREATE_PLAYGROUND = 'CREATE_PLAYGROUND';

// actions creators
export const receivePlaygrounds = playgrounds => ({
    type: RECEIVE_PLAYGROUNDS,
    payload: playgrounds
    });

    export const createPlayground = playground => ({
    type: CREATE_PLAYGROUND,
    payload: playground
    });

    export const fetchPlaygrounds = () => {
    return dispatch => {
        return fetch('http://10.26.162.14:3000/api/playground')
        .then(response => response.json())
        .then(playgrounds => dispatch(receivePlaygrounds(playgrounds)))
    }
    };

    export const addPlayground = (playground) => {
    return dispatch => {
        return fetch('http://10.26.162.14:3000/api/playground', {
            method: 'POST',
            body: playground
        })
            .then(response => response.json())
            .then(playground => dispatch(createPlayground(playground)))
        }
    };