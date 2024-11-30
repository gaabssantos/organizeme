import { IReturn, RemoteService } from '../remote/remote';

interface IVerificationReturn {
  message: string;
  messageCode: string;
}

const useVerification = async (
  code: string | undefined,
): Promise<IReturn<IVerificationReturn>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<IVerificationReturn>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/user/verification/${code}`,
    authorization: 'user-verification-success',
    timeout: 0,
  });

  return response;
};

export default useVerification;
