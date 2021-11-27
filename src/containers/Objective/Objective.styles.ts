import styled from '@emotion/styled';

export const StyledFadeBottom = styled.div`
  ul {
    list-style-type: decimal;

    li {
      margin: 1rem;
    }
  }

  @media only screen and (min-width: 992px) {
    -webkit-clip-path: polygon(40% 0, 100% 0, 100% 100%, 60% 100%);
    clip-path: polygon(40% 0, 100% 0, 100% 100%, 60% 100%);
  }
`;
