import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ColumnLayout from '../components/common/ColumnLayout';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  min-height: 100%;
  max-width: 64rem;

  margin-left: auto;
  margin-right: auto;
  margin-top: -3rem;
  margin-bottom: -3rem;
`;

const ContentInner = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

interface Props {
  children: React.ReactNode;
}

function Skeleton({ children }: Props) {
  return (
    <Container>
      <Header />

      <Content>
        <ContentInner>
          <ColumnLayout.Container>
            <ColumnLayout.Left>
              {children}
            </ColumnLayout.Left>

            <ColumnLayout.Right>
              <Sidebar />
            </ColumnLayout.Right>
          </ColumnLayout.Container>
        </ContentInner>
      </Content>

      <Footer />
    </Container>
  );
}

export default Skeleton;
