import { RemoteService } from '../remote/remote';

interface ICard {
  name: string;
  list_id: string;
}

export const useCardCreate = async (data: ICard) => {
  const remoteService = new RemoteService();

  const token = JSON.parse(
    localStorage.getItem('orgazineme:userData') as string,
  ).token;

  const response = await remoteService.remote<ICard>({
    method: 'post',
    endpoint: `${import.meta.env.VITE_API_URL}/card/create`,
    authorization: `Bearer ${token}`,
    body: data,
    timeout: 0,
  });

  return response;
};

export const useCardIndex = async () => {
  const remoteService = new RemoteService();

  const token = JSON.parse(
    localStorage.getItem('orgazineme:userData') as string,
  ).token;

  const response = await remoteService.remote({
    method: 'get',
    endpoint: `${import.meta.env.VITE_API_URL}/card`,
    authorization: `Bearer ${token}`,
    timeout: 0,
  });

  return response;
};
