import { auth, spotify, uri, appId, appSecret, refreshToken } from '../config';

// export const getUserAuth = () => {
//   const redirect = 'http://localhost:3000';
//   return async (dispatch) => {
//     try {
//       const res = await auth.get(`?client_id=${appId}&response_type=token&redirect_uri=${redirect}`);
//       dispatch({ type: 'GET_USER_AUTH', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'GET_USER_AUTH', payload: null });
//     };
//   };
// };

export const getCurrentTrack = (token = null) => {
  return async (dispatch) => {
    if (!token) {
      dispatch(postRenewAccess(getCurrentTrack));
    } else {
      try {
        const res = await spotify.get(uri.current_track, {
          'headers': { 'Authorization': `Bearer ${token}`}
        });
        dispatch({ type: 'GET_CURR_TRACK', payload: res.data });
        setTimeout(() => {
          dispatch(getCurrentTrack(token));
        }, 10000);
      } catch (err) {
        console.log(err)
        if (err.message === 'Request failed with status code 401') {
          dispatch(postRenewAccess(getCurrentTrack));
        };
        dispatch({ type: 'GET_CURR_TRACK', payload: null });
      };
    };
  };
};

export const postRenewAccess = (callback = null) => {
  return async (dispatch) => {
    const body = new URLSearchParams();
    body.append('grant_type', 'refresh_token');
    body.append('refresh_token', refreshToken);
    try {
      const res = await auth.post(uri.renew_access, body, {
        'headers': { 'Authorization': `Basic ${btoa(`${appId}:${appSecret}`)}`, 'Content-Type': 'application/x-www-form-urlencoded',}
      });
      if (callback) {
        dispatch(callback(res.data.access_token));
      };
      dispatch({ type: 'POST_RENEW_ACCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'POST_RENEW_ACCESS', payload: null });
    };
  };
};
