import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ColumnLayout from '../components/common/ColumnLayout';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  max-width: 64rem;

  margin-left: auto;
  margin-right: auto;
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
          <ColumnLayout.Left>
            {children}
          </ColumnLayout.Left>

          <ColumnLayout.Right>
            <Sidebar />
          </ColumnLayout.Right>
        </ColumnLayout.Container>
      </Content>
    </Container>
  );
}

export default Skeleton;
