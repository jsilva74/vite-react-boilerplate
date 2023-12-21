import { styled } from '@mui/material';
import { SIDE_MENU_CLOSED_WIDTH, SIDE_MENU_WIDTH } from '../../utils/constants';

export const Container = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const Content = styled('div')`
  width: calc(
    100vw -
      ${({ collapse }) =>
        collapse === 1
          ? SIDE_MENU_WIDTH
          : collapse === 0
            ? SIDE_MENU_CLOSED_WIDTH
            : 0}px
  );
  margin-left: ${({ collapse }) =>
    collapse === 1
      ? SIDE_MENU_WIDTH
      : collapse === 0
        ? SIDE_MENU_CLOSED_WIDTH
        : 0}px;
  padding: 0 ${({ collapse }) => (collapse !== -1 ? 12 : 0)}px;
  transition: ease-in-out 0.165s;
`;
