import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

import { StyledFadeLeft, StyledFadeTop } from './Information.styles';

import Avatar from '../../assets/images/avatar.jpg';

interface InformationProps {
  visible?: boolean;
}

export const Information: React.FC<InformationProps> = ({ visible }) => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="absolute w-full">
        <Fade bottom when={visible}>
          <StyledFadeLeft
            className="h-screen bg-no-repeat bg-contain opacity-20 large:opacity-100"
            style={{ backgroundImage: `url(${Avatar})` }}
          />
        </Fade>
      </div>

      <div className="w-full overflow-hidden">
        <Fade top when={visible}>
          <StyledFadeTop className="flex justify-center large:justify-end items-center large:min-h-screen large:bg-black-opacity-50 py-12">
            <Pulse when={visible} delay={1000}>
              <div className="text-white large:w-1/2 px-4 text-center text-lg">
                <p className="text-3xl mb-8 font-bold">CONTACT INFORMATION</p>
                <p>Nguyen Van Truong</p>
                <p>Male</p>
                <p>Oct 12, 1999</p>

                <div className="flex justify-center sm:items-center items-baseline">
                  <FaMapMarkerAlt className="mr-2 text-xl" />
                  17/55 Binh Duong 4 - An Binh - Di An - Binh Duong
                </div>

                <div className="flex text-sm sm:mt-12 flex-col items-center sm:flex-row sm:justify-around">
                  <div className="flex items-center mt-4 sm:mt-0">
                    <FaPhoneAlt className="mr-2 text-xl" />
                    <a href="tel:0358576021">(+84) 358 576 021</a>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <FaEnvelope className="mr-2 text-xl" />
                    <a href="mailto:truongnv9902@gmail.com">truongnv9902@gmail.com</a>
                  </div>
                </div>

                <div className="flex text-sm sm:mt-4 flex-col items-center sm:flex-row sm:justify-around">
                  <div className="flex items-center mt-4 sm:mt-0">
                    <FaFacebook className="mr-2 text-xl" />
                    <a href="https://www.facebook.com/banhtitung/" target={`_blank`}>
                      Phi Truong
                    </a>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <FaLinkedin className="mr-2 text-xl" />
                    <a href="https://www.linkedin.com/in/truongnv9902" target={`_blank`}>
                      Nguyen Van Truong
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
