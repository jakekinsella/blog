import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

namespace Article {
  export const Container = styled.div`
    font-family: georgia, times, serif;
    color: ${colors.black2};

    display: flex;
    flex-direction: column;
  `;

  export const Title = styled.div`
    font-size: 26px;
    font-weight: 500;
    color: ${colors.black};

    display: flex;
    justify-content: center;
  `;

  export const Subtitle = styled.div`
    font-family: 'Roboto', sans-serif;

    display: flex;
    justify-content: center;
  `;

  export const Body = styled.div`
  `;
}

export default Article;
