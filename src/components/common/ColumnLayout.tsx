import styled from '@emotion/styled';

import { colors } from '../../constants';

namespace ColumnLayout {
  export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
  `;

  export const Left = styled.div`
    width: 80%;
    height: 100%;

    padding-right: 5%;

    border-right: 1px solid ${colors.black};
  `;

  export const Right = styled.div`
    width: 20%;
    height: 100%;

    padding-left: 5%;
  `;
}

export default ColumnLayout;
