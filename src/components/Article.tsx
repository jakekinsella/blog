import React from 'react';
import styled from '@emotion/styled';

import { Colors } from '../constants';

namespace Article {
  const Container = styled.div`
    font-family: georgia, times, serif;
    color: ${Colors.Text.Faint.base};

    display: flex;
    flex-direction: column;
  `;


  const TitleContainer = styled.div`
    margin-top: 1em;
  `;

  const TitleInner = styled.a`
    text-decoration: none;

    font-size: 30px;
    font-weight: 500;
    color: ${Colors.Text.base};
  `;

  const TitleInnerNoLink = styled.a`
    font-size: 30px;
    font-weight: 500;
    color: ${Colors.Text.base};
  `;

  interface TitleProps {
    href?: string;
    children: React.ReactNode;
  }
  function Title({ href, children }: TitleProps) {
    return (
      <TitleContainer>
        {href === undefined ? <TitleInnerNoLink>{children}</TitleInnerNoLink> : <TitleInner href={href}>{children}</TitleInner>}
      </TitleContainer>
    )
  }

  const Subtitle = styled.div`
    margin-bottom: 1em;

    font-family: 'Roboto', sans-serif;
  `;

  const Body = styled.div`
    line-height: 1.5em;
  `;

  interface Props {
    title: string;
    subtitle?: string;
    path?: string;
    postedAt?: Date;
    children: React.ReactNode;
  }
  export function T({ title, subtitle, path, postedAt, children }: Props) {
    return (
      <Container key={title}>
        <Title href={path}>{title}</Title>

        {subtitle === undefined ? <div /> : <Subtitle>{subtitle}</Subtitle>}
        {postedAt === undefined ? <div /> : <Subtitle>{postedAt.toLocaleString('default', { month: 'long' })} {postedAt.getDay()}, {postedAt.getFullYear()}</Subtitle>}

        <Body>
          {children}
        </Body>
      </Container>
    )
  }

  export const P = styled.p`
    margin-bottom: 1.5em;
  `;

  export const BR = styled.div`
    height: 0.5em;
  `;
}

export default Article;
