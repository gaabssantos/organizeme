import Skeleton from 'react-loading-skeleton';

import { BoardHeader, BoardLists, Card, List } from './skeleton-card.styles';

const SkeletonCard = () => {
  return (
    <>
      <BoardHeader>
        <Skeleton width={300} />
      </BoardHeader>
      <BoardLists>
        <List>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
        </List>
        <List>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
        </List>
        <List>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
        </List>
        <List>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
        </List>
        <List>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
          <Card>
            <Skeleton width={250} />
          </Card>
        </List>
      </BoardLists>
    </>
  );
};

export default SkeletonCard;
