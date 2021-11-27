import React from 'react';
import Fade from 'react-reveal/Fade';
interface HobbyProps {
  visible?: boolean;
}

export const Hobby: React.FC<HobbyProps> = ({ visible }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Fade bottom when={visible}>
        <div>Hobby</div>
      </Fade>
    </div>
  );
};
