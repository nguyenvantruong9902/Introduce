import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledFadeBottom } from './Objective.styles';

import Selfie from '../../assets/images/selfie.jpg';

interface ObjectiveProps {
  visible?: boolean;
}

export const Objective: React.FC<ObjectiveProps> = ({ visible }) => {
  return (
    <div className="flex justify-center relative w-full overflow-hidden">
      <div
        className="absolute w-full large:h-full large:min-h-screen bg-no-repeat z-10 large:border-t large:border-white"
        style={{ backgroundImage: `url(${Selfie})`, backgroundSize: '40% 100%' }}
      />

      <div className="w-full overflow-hidden">
        <Fade bottom when={visible}>
          <StyledFadeBottom className="flex justify-center large:justify-end w-full large:min-h-screen large:bg-black-opacity-50 relative">
            <div className="text-white large:w-1/2 text-lg mt-8 px-4">
              <p className="text-3xl mb-8 font-bold text-center large:text-left">OVERVIEW</p>
              <ul className="ml-8">
                <li>I've been a developer since 2020, with experience in ReactJS</li>
                <li>I work well under pressure, have a responsibility with my tasks</li>
                <li>I always research to resolve the problems</li>
                <li>I'm ready to learn a new technology</li>
                <li>I always open to new challenges</li>
              </ul>

              <div>
                <p className="text-3xl mt-12 mb-8 font-bold text-center large:text-left">CURRENT ORIENTATIONS</p>
                <ul className="ml-8">
                  <li>I want to be a full-stack developer in the next 1 year</li>
                </ul>
              </div>
            </div>
          </StyledFadeBottom>
        </Fade>
      </div>
    </div>
  );
};
