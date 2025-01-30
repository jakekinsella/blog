import React from 'react';
import styled from '@emotion/styled';

import { Colors } from '../constants';

const Container = styled.div`
  width: 100%;

  border-bottom: 1px solid ${Colors.Container.border};

  display: flex;
`;

const Title = styled.a`
  font-family: 'Roboto Slab', serif;
  font-size: 32px;

  display: flex;
  align-items: center;

  flex-grow: 1;

  color: ${Colors.Text.base};
  text-decoration: none;

  &:hover {
    color: ${Colors.Text.hover};
  }

  &:active {
    color: ${Colors.Text.active};
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

  color: ${Colors.Text.base};
  text-decoration: none;

  margin-right: 2%;

  &:hover {
    color: ${Colors.Text.hover};
  }

  &:active {
    color: ${Colors.Text.active};
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
