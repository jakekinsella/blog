import React from 'react';
import styled from '@emotion/styled';

import { Colors } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 2rem;

  border-top: 1px solid ${Colors.Container.border};

  padding-top: 0.8rem;

  display: flex;
`;

const NavLinkContainerStart = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 3rem;

  @media (max-width: 750px) {
    justify-content: center;
    padding-left: 0;
  }
`;

const NavLinkContainerMiddle = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-right: 6rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const NavLinkContainerEnd = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  padding-right: 3rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 15px;

  cursor: pointer;
  user-select: none;

  color: ${Colors.Text.Faint.base};
  text-decoration: none;

  &:hover {
    color: ${Colors.Text.Faint.hover};
  }

  &:active {
    color: ${Colors.Text.Faint.active};
  }
`;

function Footer() {
  return (
    <Container>
      <NavLinkContainerStart>
        <NavLink href="/">© Jake Kinsella 2024</NavLink>
      </NavLinkContainerStart>
      
      <NavLinkContainerMiddle>
        <NavLink href="https://jakekinsella-portfolio.s3.amazonaws.com/feeds.xml">RSS</NavLink>
      </NavLinkContainerMiddle>

      <NavLinkContainerMiddle>
        <NavLink href="https://jakekinsella-portfolio.s3.amazonaws.com/Resume.pdf">Resume</NavLink>
      </NavLinkContainerMiddle>
      
      <NavLinkContainerEnd>
        <NavLink href="/about">About</NavLink>
      </NavLinkContainerEnd>
    </Container>
  );
}

export default Footer;
