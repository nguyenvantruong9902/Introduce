import styled from '@emotion/styled';

export const StyledFadeLeft = styled.div`
  -webkit-clip-path: polygon(0 0, 60% 0, 40% 100%, 0 100%);
  clip-path: polygon(0 0, 60% 0, 40% 100%, 0 100%);
`;

export const StyledFadeTop = styled.div`
  -webkit-clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);

  background-color: rgba(0, 0, 0, 0.5);
`;
