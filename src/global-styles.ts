import { injectGlobal } from '@emotion/css';

import { Colors } from './constants';

injectGlobal`
    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        color: ${Colors.Text.base};
        background-color: ${Colors.Container.background};
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 100;
    }

    a {
      color: ${Colors.Text.base};

      &:hover {
        color: ${Colors.Text.hover};
      }

      &:active {
        color: ${Colors.Text.active};
      }
    }
`;
