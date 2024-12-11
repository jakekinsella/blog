import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

const Container = styled.div`
  width: 100%;

  border-bottom: 1px solid ${colors.black};

  display: flex;
`;

const Title = styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 32px;

  display: flex;
  align-items: center;

  flex-grow: 1;
`;

const Navigation = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 18px;

  cursor: pointer;
  user-select: none;

  color: ${colors.black};
  text-decoration: none;

  margin-right: 2%;

  &:hover {
    color: ${colors.blackHover};
  }

  &:active {
    color: ${colors.blackActive};
  }
`;

function Header() {
  return (
    <Container>
      <Title>Jake Kinsella</Title>

      <Navigation>
        <NavLink href="/feeds.xml">RSS</NavLink>
        <NavLink href="/about">About</NavLink>
      </Navigation>
    </Container>
  );
}

export default Header;
