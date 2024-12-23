import { RemoteService } from '../remote/remote';

interface IList {
  board_id: string;
  name: string;
}

export const useListCreate = async (data: IList) => {
  const remoteService = new RemoteService();

  const token = JSON.parse(
    localStorage.getItem('orgazineme:userData') as string,
  ).token;

  const response = await remoteService.remote<IList>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/list/create`,
    authorization: `Bearer ${token}`,
    body: data,
    timeout: 0,
  });

  return response;
};

export const useListIndex = async (boardId: string) => {
  const remoteService = new RemoteService();

  const token = JSON.parse(
    localStorage.getItem('orgazineme:userData') as string,
  ).token;

  const response = await remoteService.remote({
    method: 'get',
    endpoint: `${import.meta.env.VITE_API_URL}/list/${boardId}`,
    authorization: `Bearer ${token}`,
    timeout: 0,
  });

  return response;
};
