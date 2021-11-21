import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledFadeRight } from './Hobby.styles';

interface HobbyProps {
  visible?: boolean;
}

export const Hobby: React.FC<HobbyProps> = ({ visible }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Fade right when={visible}>
        <StyledFadeRight className="flex w-full h-screen">Hello</StyledFadeRight>
      </Fade>
    </div>
  );
};
