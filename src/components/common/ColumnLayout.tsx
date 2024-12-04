import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../constants';

namespace ColumnLayout {
  export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
  `;

  export const Left = styled.div`
    width: 70%;
    height: 100%;

    border-right: 1px solid ${colors.black};
  `;

  export const Right = styled.div`
    width: 30%;
    height: 100%;
  `;
}

export default ColumnLayout;
