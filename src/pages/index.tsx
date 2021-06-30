import React from 'react';
import styled from 'styled-components';
import { topChallenge, retry, banner } from '@tools/api';
import { ChallengeCard } from '@components/Thumbnail/ThumbnailCard';
import { BannerCard } from '@components/Banner/BannerItem';
import * as _ from 'lodash';
import 'react-slideshow-image/dist/styles.css';

const popularChallenges = topChallenge();
const retryChallenges = retry();
const bannerChallenge = banner();

console.log(bannerChallenge);
const Home = () => {
  return (
    <Container>
      <BannerRow>
        {bannerChallenge.map((info, index) => {
          return <BannerCard info={info} key={index}></BannerCard>;
        })}
      </BannerRow>

      <CardRow>
        {popularChallenges.map((info, index) => {
          return <ChallengeCard info={info} key={index}></ChallengeCard>;
        })}
      </CardRow>

      <p>다시 도전해볼까요?</p>
      <CardRow>
        {retryChallenges.map((info, index) => {
          return <ChallengeCard info={info} key={index}></ChallengeCard>;
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
  height: 160vw;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 15px;
`;

const BannerRow = styled.div`
  display: flex;
  width: 100vw;
  padding: 15px;
  height: 60vw;
  flex-wrap: nowrap;
`;
