import React from 'react';
import styled from 'styled-components';
import { topChallenge, retry, banner } from '@tools/api';
import { ChallengeCard } from '@components/Thumbnail/ThumbnailCard';
import { BannerCard } from '@components/Banner/BannerItem';
import * as _ from 'lodash';

import Slider from 'react-slick';

const popularChallenges = topChallenge();
const retryChallenges = retry();
const bannerChallenge = banner();

console.log(bannerChallenge);
const Home = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
  };
  return (
    <Container>
      <Div>
        <Slider {...settings}>
          {bannerChallenge.map((info, index) => {
            return <BannerCard info={info} key={index}></BannerCard>;
          })}
        </Slider>
      </Div>

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
const Div = styled.div`
  width: 100vw;
  padding: 15px 0px;
`;
const CardRow = styled.div`
  display: flex;
  width: 100%;
  height: 160vw;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 15px;
`;

// const BannerRow = styled.div`
//   display: flex;
//   width: 100vw;
//   padding: 15px 12px;
//   height: 60vw;
//   flex-wrap: nowrap;
//   overflow-x: auto;
//   min-width: min-content;
// `;
