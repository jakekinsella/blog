import styled from '@emotion/styled';

import { Colors } from '../../constants';

namespace ColumnLayout {
  export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
  `;

  export const Left = styled.div`
    width: 70%;
    height: 100%;

    padding-left: 3%;
    padding-right: 3%;

    border-right: 1px solid ${Colors.Container.border};

    @media (max-width: 750px) {
      width: 100%;
      border-right: none;
    }
  `;

  export const Right = styled.div`
    width: 30%;
    height: 100%;

    padding-left: 1%;
    padding-right: 1%;

    @media (max-width: 750px) {
      display: none;
    }
  `;
}

export default ColumnLayout;
