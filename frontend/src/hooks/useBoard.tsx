import { RemoteService } from '../remote/remote';

interface IBoard {
  name: string;
  color: string;
}

export const useBoardCreate = async (data: IBoard) => {
  const remoteService = new RemoteService();

  const token = JSON.parse(
    localStorage.getItem('orgazineme:userData') as string,
  ).token;

  const response = await remoteService.remote<IBoard>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/board/create`,
    authorization: `Bearer ${token}`,
    body: data,
    timeout: 0,
  });

  return response;
};
