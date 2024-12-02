import { RemoteService } from '../remote/remote';

interface ISessionReturn {
  name: string;
  token: string;
}

interface IUser {
  email: string;
  password: string;
}

const useSession = (data: IUser) => {
  const remoteService = new RemoteService();

  const response = remoteService.remote<ISessionReturn>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/user/session`,
    authorization: 'user-login-success',
    body: data,
    timeout: 0,
  });

  return response;
};

export default useSession;
