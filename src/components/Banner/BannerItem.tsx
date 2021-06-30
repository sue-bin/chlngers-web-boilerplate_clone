import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { FaUserAlt } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';

import { IBannerInfo } from 'src/interfaces/ChallengeInfo.interface';

const infoContents = (thisInfo: IBannerInfo) =>
  thisInfo.hasOwnProperty('status') ? (
    <InfoContainer>
      <FaUserAlt color="white" size="9" />
      <Line>
        {thisInfo.RegisterCounts.toLocaleString()}명 참가 ·{' '}
        {thisInfo.start_date}· {thisInfo.status}
      </Line>
    </InfoContainer>
  ) : (
    <InfoContainer>
      <FaUserAlt color="white" size="9" />
      <a>
        {thisInfo.RegisterCounts.toLocaleString()}명 참가 ·{' '}
        {thisInfo.start_date}
      </a>
    </InfoContainer>
  );

export const BannerCard: React.FC<IBannerInfo> = (info) => {
  const thisInfo = info.info;
  console.log(thisInfo);
  return (
    <Image background={thisInfo.image}>
      <Title>{thisInfo.title[0]}</Title>
      <Title>{thisInfo.title[1]}</Title>
      <SubTitle>{thisInfo.subTitle}</SubTitle>
      {infoContents(thisInfo)}
      <TagContainer>
        <Tag>{thisInfo.cycle}</Tag>
        <Tag>{thisInfo.duration}</Tag>
      </TagContainer>
    </Image>
  );
};
const Image = styled.div`
  flex: 1 0 0;
  object-fill: cover;
  background: ${(props: any) => `url(${props.background})`};
  display: flex;
  background-size: cover;
  border-radius: 5px;
  padding: 25px;
  flex-direction: column;
  align-items: flex-start;
  justify-contents: space-between;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 2.5px;
  color: white;
  display: inline;
  flex-basis: auto;
`;

const SubTitle = styled.div`
  color: white;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 15px;
  margin-top: 2.5px;
  flex-basis: auto;
`;

const InfoContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-contents: center;
  margin: 5px 0px;
  padding: 5px 10px;
  color: white;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 10px;
  flex-basis: auto;
  margin-top: auto;
`;

const P = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  font-family: Noto Sans KR;
  font-weight: 300;
  font-size: 10px;
  align-items: center;
  margin-left: 3px;
`;

const IsOfficial = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 10px;
  color: #6c757d;
  margin: 5px 5px 2.5px 0px;
`;

const StartDate = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 10px;
  color: #495057;
  margin: 5px 5px 2.5px 0px;
`;

const TagContainer = styled.div``;

const Tag = styled.div`
  background: #e9ecef;
  color: #495057;
  display: inline;
  margin: 1px;
  padding: 3px 7px;
  border-radius: 2px;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 10px;
`;

const Line = styled.a`
  margin: 0px 3px;
`;
