import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const FadeGifUp = keyframes`${fadeInUp}`;

export const Fame = styled.div`
  display: flex;
  justify-content: center;
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
  @media (min-width: 700px) {
    grid-gap: 28px;
  }
  &:active {
    border: 20px solid green;
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
