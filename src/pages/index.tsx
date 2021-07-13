import React from 'react';
import styled from 'styled-components';
import { topChallenge, retry, banner } from '@tools/api';
import { ChallengeCard } from '@components/Thumbnail/ThumbnailCard';
import { BannerCard } from '@components/Banner/BannerItem';
import * as _ from 'lodash';
import Slider from 'react-slick';
import { Category } from '@components/Category/CategoryItem';
import { Header } from '@components/Header/Header';
import {
  IChallengeInfo,
  IBannerInfo,
} from 'src/interfaces/ChallengeInfo.interface';

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
      <Header />
      <Div>
        <Slider {...settings}>
          {bannerChallenge.map((info: IBannerInfo, i: number) => {
            return <BannerCard key={i} info={info} />;
          })}
        </Slider>
      </Div>
      <SectionTitle>챌린지 카테고리</SectionTitle>
      <Category />

      <SectionTitle>인기 챌린지</SectionTitle>
      <CardRow>
        {popularChallenges.map((info: IChallengeInfo, i: number) => {
          return <ChallengeCard key={i} info={info} />;
        })}
      </CardRow>

      <SectionTitle>다시 도전해볼까요?</SectionTitle>
      <CardRow>
        {retryChallenges.map((info: IChallengeInfo, i: number) => {
          return <ChallengeCard key={i} info={info} />;
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
  height: 80vh;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 0px 20px;
`;

const SectionTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 20px;
  margin: 30px auto 30px 20px;
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
