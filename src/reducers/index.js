import { combineReducers } from 'redux';

const access = (state = { token: null }, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'POST_RENEW_ACCESS':
      if (payload) {
        return state = { token: payload.access_token };
      } else {
        return state;
      };
    default:
      return state;
  };
};

const currentTrack = (state = null, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'GET_CURR_TRACK':
      if (payload && payload.item && payload.is_playing) {
        const track = payload.item.name;
        let artists = [];
        const id = payload.item.id;
        payload.item.artists.forEach(a => { artists = [ ...artists, a.name ] });
        const playing = payload.is_playing;
        return state = { track, artists, playing, id };
      } else {
        return state = null;
      };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  access,
  currentTrack
});

export default rootReducer;
