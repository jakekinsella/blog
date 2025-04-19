import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ColumnLayout from '../components/common/ColumnLayout';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;

  margin-left: auto;
  margin-right: auto;
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
          <ColumnLayout.Container>
            <ColumnLayout.Small />

            <ColumnLayout.Large>
              <ContentInner>
                {children}
              </ContentInner>
            </ColumnLayout.Large>

            <ColumnLayout.Small>
              <ContentInner>
                <Sidebar />
              </ContentInner>
            </ColumnLayout.Small>
          </ColumnLayout.Container>
      </Content>

      <Footer />
    </Container>
  );
}

export default Skeleton;
