import Skeleton from 'react-loading-skeleton';

import { themes } from '../../styles/themes.style';
import { Board } from './skeleton-board.styles';

type SkeletonBoard = {
  width: number;
};

const SkeletonBoard = ({ width }: SkeletonBoard) => {
  return (
    <Board>
      <Skeleton width={width} baseColor={themes.cardColor} />
    </Board>
  );
};

export default SkeletonBoard;
