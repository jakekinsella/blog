import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

const Container = styled.div`
  width: 100%;

  padding-top: 100px;
`;

function Sidebar() {
  return (
    <Container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nulla vitae augue rhoncus fermentum quis ac neque.
    </Container>
  );
}

export default Sidebar;
