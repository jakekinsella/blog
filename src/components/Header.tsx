import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid ${colors.black};
`;

function Header() {
  return (
    <Container>
      Header
    </Container>
  );
}

export default Header;
