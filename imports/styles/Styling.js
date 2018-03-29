import styled, { keyframes } from 'styled-components';
import { fadeInUp, flipInX, tada } from 'react-animations';

const FadeGifUp = keyframes`${fadeInUp}`;
const FlipInX = keyframes`${flipInX}`;
const SwingClick = keyframes`${tada}`;

export const Fame = styled.div`
  animation: 2s ${FlipInX};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
export const GifGrid = styled.div`
  animation: 1s ${FadeGifUp};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 1rem auto;
  @media (min-width: 700px) {
    grid-gap: 28px;
  }
`;

export const GifShow = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const GifStyling = styled.img`
  width: 400px;
  height: 400px;
`;

export const GifVote = styled.div`
  margin-top: 10rem;
  &:active {
    animation: 1s ${SwingClick};
  @media (min-width: 700px) {
    grid-gap: 28px;
  }
  &:active {
    animation: 2s ${SwingClick};
  }
`;

export const HeaderStyle = styled.div`
  a {
    color: #da70d6;
  }
  background: #4169e1;
  color: #da70d6;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 100vw;
  padding: 1.4rem;
`;

export const TopTen = styled.h1`
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px 10px;
`;

export const Warning = styled.p`
  display: flex;
  font-size: 16px;
`;
