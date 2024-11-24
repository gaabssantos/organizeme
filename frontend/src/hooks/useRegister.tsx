import { IReturn, RemoteService } from '../remote/remote';

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface ILoginReturn {
  name: string;
  email: string;
  password: string;
  active: boolean;
  verificationCode: string;
}

const useRegister = async (data: IUser): Promise<IReturn<ILoginReturn>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<ILoginReturn>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/user/create`,
    authorization: 'user-create-success',
    body: data,
    timeout: 0,
  });

  return response;
};

export default useRegister;
