import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import { StyledFadeLeft, StyledFadeTop } from './Information.styles';

interface InformationProps {
  visible?: boolean;
}

export const Information: React.FC<InformationProps> = ({ visible }) => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="absolute w-full">
        <Fade bottom when={visible}>
          <StyledFadeLeft></StyledFadeLeft>
        </Fade>
      </div>

      <div className="w-full overflow-hidden">
        <Fade top when={visible}>
          <StyledFadeTop className="flex justify-end items-center h-screen">
            <Pulse when={visible} delay={1000}>
              <div className="text-white w-1/2 text-center text-lg">
                <p className="text-3xl mb-8 font-bold">Contact Information</p>
                <p>Nguyen Van Truong</p>
                <p>Male</p>
                <p>12/10/1999</p>

                <div className="flex justify-center items-center">
                  <FaMapMarkerAlt className="mr-2 text-xl" />
                  17/55 Binh Duong 4 - An Binh - Di An - Binh Duong
                </div>

                <div className="flex justify-around text-sm mt-12">
                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-2 text-xl" />
                    <span>0358576021</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-xl" />
                    <a href="mailto:truongnv9902@gmail.com">truongnv9902@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <FaFacebook className="mr-2 text-xl" />
                    <a href="https://www.facebook.com/banhtitung/" target={`_blank`}>
                      Phi Truong
                    </a>
                  </div>
                </div>
              </div>
            </Pulse>
          </StyledFadeTop>
        </Fade>
      </div>
    </div>
  );
};
