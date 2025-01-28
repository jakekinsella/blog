import { injectGlobal } from '@emotion/css';

import { colors } from './constants';

injectGlobal`
    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        color: ${colors.black1_5};
        background-color: ${colors.white};
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 100;
    }

    a {
      color: ${colors.black1_5};

      &:hover {
        color: ${colors.blackHover};
      }

      &:active {
        color: ${colors.blackActive};
      }
    }
`;
