import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { RiFlag2Line } from 'react-icons/ri';
import Cart from './images/cart.svg';

export const Header = () => {
  return (
    <Wrapper>
      <SearchBar>
        <FiSearch color=" rgba(0, 0, 0, 0.6)" size="20" />
        <Text>어떤 습관을 가지고 싶으신가요?</Text>
      </SearchBar>
      <Cart />
      <Cart />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 5vh;
  padding: 0px 20px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  background: rgba(223, 228, 234, 0.4);
  color: rgba(0, 0, 0, 0.5);
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 13px;
  padding-left: 10px;
  align-items: center;
`;
const Text = styled.div`
  margin-top: 3px;
  margin-left: 5px;
`;
