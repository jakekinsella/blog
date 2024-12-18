import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

const Container = styled.div`
  width: 100%;

  border-bottom: 1px solid ${colors.black};

  display: flex;
`;

const Title = styled.a`
  font-family: 'Roboto Slab', serif;
  font-size: 32px;

  display: flex;
  align-items: center;

  flex-grow: 1;

  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
  }

  &:active {
    color: ${colors.black};
  }
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

  @media (max-width: 750px) {
    margin-right: 8%;
  }
`;

function Header() {
  return (
    <Container>
      <Title href="/">Jake Kinsella</Title>

      <Navigation>
        <NavLink href="https://jakekinsella-portfolio.s3.amazonaws.com/feeds.xml">RSS</NavLink>
        <NavLink href="https://jakekinsella-portfolio.s3.amazonaws.com/Resume.pdf">Resume</NavLink>
        <NavLink href="/about">About</NavLink>
      </Navigation>
    </Container>
  );
}

export default Header;
