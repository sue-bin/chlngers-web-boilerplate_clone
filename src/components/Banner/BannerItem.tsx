import React from 'react';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

import { IBannerInfo } from 'src/interfaces/ChallengeInfo.interface';

interface IBannerInfoObject {
  info: IBannerInfo;
}

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
      <Line>
        {thisInfo.RegisterCounts.toLocaleString()}명 참가 ·{' '}
        {thisInfo.start_date}
      </Line>
    </InfoContainer>
  );

export const BannerCard: React.FC<IBannerInfoObject> = (info) => {
  const thisInfo = info['info'];
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
  width: 90vw;
  object-fill: cover;
  background: ${(props: any) => `url(${props.background})`};
  display: flex;
  background-size: cover;
  border-radius: 5px;
  padding: 30px 25px;
  flex-direction: column;
  align-items: flex-start;
  justify-contents: space-between;
  overflow: auto;
  margin: 0px 3px;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 2.5px;
  color: white;
  display: inline;
  flex-basis: auto;
`;

const SubTitle = styled.div`
  color: white;
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 13px;
  margin-top: 2.5px;
  flex-basis: auto;
  margin-bottom: 30px;
`;

const InfoContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
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

const TagContainer = styled.div`
  margin-top: auto;
`;

const Tag = styled.div`
  background: #e9ecef;
  color: rgba(47, 54, 64, 1);
  display: inline;
  margin: 1px;
  padding: 6px 8px 4px 8px;
  border-radius: 2px;
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 10px;
`;

const Line = styled.div`
  padding-left: 4px;
  padding-top: 1.5px;
`;
