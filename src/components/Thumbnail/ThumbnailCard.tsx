import React from 'react';
import styled from 'styled-components';
import ChallengeInfo from 'src/interfaces/ChallengeInfo.interface';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { FaUserAlt } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';

const CheckOfficial = (params: any) =>
  params === 1 ? (
    <IsOfficial>
      <HiBadgeCheck />
      <a>공식 챌린지</a>
    </IsOfficial>
  ) : (
    <a>개설 챌린지</a>
  );

const CutTitle = (params: string) =>
  params.length > 23 ? params.slice(0, 23) + '…' : params;

export const Card: React.FC<ChallengeInfo> = (info) => {
  const thisInfo = info.info;
  console.log(thisInfo);
  return (
    <CardContainer>
      <Image background={thisInfo.image}>
        <RegisterContainer>
          <FaUserAlt color="white" size="8" />
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
  width: 40vw;
  height: 60vw;
  background: white;
  border-radius: 5px;
  display: flex;
  margin: 3px 10px;
  flex-direction: column;
`;

const RegisterContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 22%;
  justify-contents: center;
  margin: 5px;
  padding: 2px 7px;
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
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  object-fill: cover;
  background: ${(props) => `url(${props.background})`};
  display: inline-flex;
  background-size: cover;
  border-radius: 5px;
  justify-content: flex-end;
  align-items: flex-start;
`;

const IsOfficial = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 10px;
  color: #6c757d;
  margin: 5px 5px 2.5px 0px;
`;

const Title = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 12px;
  margin: 5px 5px 2.5px 0px;
  height: 30px;
`;

const StartDate = styled.div`
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 10px;
  color: #495057;
  margin: 5px 5px 2.5px 0px;
`;

const TagContainer = styled.div`
  margin: 5px 5px 2.5px 0px;
`;

const Tag = styled.div`
  background: #e9ecef;
  color: #495057;
  display: inline;
  margin: 1px;
  padding: 3px 7px;
  border-radius: 2px;
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 10px;
`;
