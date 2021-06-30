import React from 'react';
import styled from 'styled-components';
import { topChallenge } from '@tools/api';
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

const popular = topChallenge();
console.log(popular);

const Home = () => {
  return (
    <Container>
      {popular.map((info, index) => {
        console.log('!');

        console.log(info);
        return <Card info={info} key={index}></Card>;
      })}
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
`;
