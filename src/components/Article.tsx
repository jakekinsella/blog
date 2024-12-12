import styled from '@emotion/styled';

import { colors } from '../constants';

namespace Article {
  export const Container = styled.div`
    font-family: georgia, times, serif;
    color: ${colors.black2};

    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
  `;

  export const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: ${colors.black};

    margin-top: 1em;
  `;

  export const Subtitle = styled.div`
    margin-bottom: 1em;

    font-family: 'Roboto', sans-serif;
  `;

  export const Body = styled.div`
    line-height: 1.5em;
  `;

  export const P = styled.p`
    margin-bottom: 1.5em;
  `;
}

export default Article;
