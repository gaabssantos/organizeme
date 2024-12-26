import Skeleton from 'react-loading-skeleton';

import { themes } from '../../styles/themes.style';
import { Board } from './skeleton-board.styles';

const SkeletonBoard = () => {
  return (
    <Board>
      <Skeleton width={200} baseColor={themes.cardColor} />
    </Board>
  );
};

export default SkeletonBoard;
