import React from 'react';
import Fade from 'react-reveal/Fade';
interface HobbyProps {
  visible?: boolean;
}

export const Hobby: React.FC<HobbyProps> = ({ visible }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Fade bottom when={visible}>
        <div className="text-center text-2xl text-white font-bold my-8">Thanks for watching!</div>
      </Fade>
    </div>
  );
};
