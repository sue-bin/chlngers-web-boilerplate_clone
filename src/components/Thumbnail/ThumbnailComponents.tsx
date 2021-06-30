import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';

export const RegisterCounts: React.FC<{ RegisterCounts: number }> = ({
  RegisterCounts,
}) => {
  return (
    <RegisterContainer>
      <IconColor>
        <Icon icon={user} size={10} /> {RegisterCounts}명
      </IconColor>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
`;
const IconColor = styled.div`
  color: white;
`;

// const CustomLink = styled.a`
//   cursor: pointer;
//   padding: 10px 0;
// `;
