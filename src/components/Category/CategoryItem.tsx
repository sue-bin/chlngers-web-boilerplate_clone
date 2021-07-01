import React from 'react';
import styled from 'styled-components';
import Alphabet from './images/category_alphabet.svg';
import Book from './images/category_book.svg';
import Calendar from './images/category_calendar.svg';
import Diet from './images/category_diet.svg';
import Emotion from './images/category_emotion.svg';
import Exercise from './images/category_exercise.svg';
import Family from './images/category_family.svg';
import Hobby from './images/category_hobby.svg';
import Money from './images/category_money.svg';
import Pencil from './images/category_pencil.svg';

interface ICategory {
  name: string;
  image: any;
}
export const Category = () => {
  const categories = [
    { name: '다이어트', image: <Diet /> },
    { name: '운 동', image: <Exercise /> },
    { name: '공 부', image: <Pencil /> },
    { name: '돌 봄', image: <Family /> },
    { name: '생활습관', image: <Calendar /> },
    { name: '취 미', image: <Hobby /> },
    { name: '감정관리', image: <Emotion /> },
    { name: '외국어', image: <Alphabet /> },
    { name: '돈관리', image: <Money /> },
    { name: '독 서', image: <Book /> },
  ];
  return (
    <CategoryWrapper>
      {categories.map((category, index) => {
        return (
          <CategoryItem>
            <div>{category.image}</div>

            <div>{category.name}</div>
          </CategoryItem>
        );
      })}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 25px;
  align-content: space-between;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 18%;
  height: 40%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 12px;
  margin: 0px 2px;
  justify-content: space-between;
  align-items: center;
`;
