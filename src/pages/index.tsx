import React from 'react';
import styled from 'styled-components';
import { topChallenge, retry } from '@tools/api';
import { Card } from '@components/Thumbnail/ThumbnailCard';
import * as _ from 'lodash';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

interface ChallengeInfo {
  id: number;
  title: string;
  start_date: string;
  cycle: string;
  duration: string;
  is_official: number;
  RegisterCounts: number;
  image: string;
}

const popularChallenges = topChallenge();
const retryChallenges = retry();

const Home = () => {
  return (
    <Container>
      <CardRow>
        {popularChallenges.map((info, index) => {
          return <Card info={info} key={index}></Card>;
        })}
      </CardRow>

      <p>다시 도전해볼까요?</p>
      <CardRow>
        {retryChallenges.map((info, index) => {
          return <Card info={info} key={index}></Card>;
        })}
      </CardRow>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
`;

const CardRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  height: 160vw;
  flex-flow: wrap;
  justify-content: space-around;
`;
