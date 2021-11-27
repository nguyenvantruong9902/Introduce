import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledFadeBottom } from './Objective.styles';

interface ObjectiveProps {
  visible?: boolean;
}

export const Objective: React.FC<ObjectiveProps> = ({ visible }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Fade bottom when={visible}>
        <StyledFadeBottom className="flex justify-end w-full h-screen large:bg-black-opacity-50 relative">
          <div className="text-white large:w-1/2 px-4 text-lg mt-8">
            <p className="text-3xl mb-8 font-bold">Objective</p>
            <ul>
              <li>Looking forward to learning experience in a professional, dynamic work environment</li>
              <li>Create many useful products - Get promoted at work</li>
            </ul>

            <div className="large:ml-32">
              <p className="text-3xl mt-12 mb-8 font-bold">Skills</p>
              <ul>
                <li>Good job</li>
                <li>Good teamwork</li>
                <li>Research and learn new technology</li>
              </ul>
            </div>
          </div>
        </StyledFadeBottom>
      </Fade>
    </div>
  );
};
