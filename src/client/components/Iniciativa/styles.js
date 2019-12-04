import styled, { css } from 'styled-components';

export const Fullbleed = styled.div`
  margin-bottom: 4rem;
  height: 26vh;
  background: #eee;
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.52);
    z-index: 2;
  }
  #full-media {
    height: 100%;
  }
  .grid-fullbleed {
    height: 100%;
    position: relative;
    padding: 40px 200px;
  }
  .info-article {
    h2 {
      color: #fff;
      font-size: 1.9rem;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 4rem;
    }
    img {
      margin: 0 auto;
      display: block;
    }
  }
`;