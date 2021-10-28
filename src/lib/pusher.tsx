import Pusher from 'pusher-js';
import { toast } from 'react-toastify';

const subscribeWithPusher = async () => {
  const jwt = localStorage.getItem('jwt');
  const APP_KEY = 'd44e3d910d38a928e0be';
  const APP_CLUSTER = 'eu';
  const pusher = new Pusher(APP_KEY, {
    authEndpoint: 'https://frontend-test-api.aircall.io/pusher/auth',
    cluster: APP_CLUSTER,
    auth: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });
  const privateChannel = await pusher.subscribe('private-aircall');

  await privateChannel.bind('update-call', (data: any) => {
    const message =
      (data.is_archived ? 'Call Archived ' : 'Call Unarchived') + ' with id: ' + data.id;
    toast(message);
    return data;
  });
};

export default subscribeWithPusher;
