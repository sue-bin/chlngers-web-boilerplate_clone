import React from 'react';
import styled from 'styled-components';
import ChallengeInfo from 'src/interfaces/ChallengeInfo.interface';
import { FaUserAlt } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';

const CheckOfficial = (params: any) =>
  params === 1 ? (
    <IsOfficial>
      <HiBadgeCheck color="rgba(164, 176, 190,1.0)" size="13" />
      <OfficialText> 공식 챌린지</OfficialText>
    </IsOfficial>
  ) : (
    <IsOfficial>
      <HiBadgeCheck />
      <OfficialText> 개설 챌린지</OfficialText>
    </IsOfficial>
  );

const CutTitle = (params: string) =>
  params.length > 23 ? params.slice(0, 23) + '…' : params;

export const ChallengeCard: React.FC<ChallengeInfo> = (info) => {
  const thisInfo = info.info;
  return (
    <CardContainer>
      <Image background={thisInfo.image}>
        <RegisterContainer>
          <FaUserAlt color="white" size="9" />
          <P>
            {thisInfo.RegisterCounts.toLocaleString()}
            <a>명</a>
          </P>
        </RegisterContainer>
      </Image>
      {CheckOfficial(thisInfo.is_official)}
      <Title>{CutTitle(thisInfo.title)}</Title>
      <StartDate>{thisInfo.start_date}</StartDate>
      <TagContainer>
        <Tag>{thisInfo.cycle}</Tag>
        <Tag>{thisInfo.duration}</Tag>
      </TagContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 48%;
  height: 50%;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottme: 30px;
`;

const RegisterContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-contents: space-around;
  margin: 10px;
  padding: 5px 8px;
`;

// const CustomLink = styled.a`
//   cursor: pointer;
//   padding: 10px 0;
// `;

const P = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  font-family: Noto Sans KR;
  font-weight: 300;
  font-size: 10px;
  align-items: center;
  margin-left: 5px;
  margin-top: 1px;
`;

const Image = styled.div`
  width: 100%;
  height: 48%;
  object-fill: cover;
  background: ${(props) => `url(${props.background})`};
  display: inline-flex;
  background-size: cover;
  border-radius: 5px;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const IsOfficial = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 10px;
  color: rgba(116, 125, 140, 1);
  margin: 5px 5px 2.5px 0px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 13px;
  margin: 5px 5px 2.5px 0px;
  height: 30px;
`;

const StartDate = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 10px;
  color: rgba(116, 125, 140, 1);
  margin: 5px 5px 2.5px 0px;
`;

const TagContainer = styled.div`
  margin: 5px 5px 2.5px 0px;
`;

const Tag = styled.div`
  background: rgba(241, 242, 246, 0.5);
  color: rgba(87, 96, 111, 1);
  display: inline;
  margin: 1px;
  padding: 4px 7px 3px 7px;
  border-radius: 2px;
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 10px;
`;

const OfficialText = styled.div`
  padding-left: 2px;
  padding-top: 1px;
`;
