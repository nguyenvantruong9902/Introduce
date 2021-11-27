import React from 'react';
import { FcGraduationCap } from 'react-icons/fc';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { WrapperExperience } from './Experience.styles';

import 'react-vertical-timeline-component/style.min.css';

export const timeLines = [
  {
    date: '09/2017 - 12/2019',
    title: 'Student',
    work: 'Learn Information Technology (Software Application)',
    workLocation: 'FPT Polytechnic College',
    icon: <FcGraduationCap />,
  },
  {
    date: '10/2020 - Present',
    title: 'Developer ReactJS',
    work: 'Developer, Learn how to work, Learn ReactNative',
    workLocation: 'HD WEBSOFT, BeautyBooking Team (Start Up)',
    icon: <MdOutlineDeveloperMode />,
  },
];

interface ExperienceProps {
  visible?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ visible }) => {
  return (
    <WrapperExperience className="flex justify-center relative border-t border-b border-solid border-white">
      <VerticalTimeline>
        {timeLines.map((timeLine) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
            date={timeLine.date}
            iconStyle={{ background: 'white' }}
            icon={timeLine.icon}
          >
            <h3>{timeLine.title}</h3>
            <h5>{timeLine.workLocation}</h5>
            <p>{timeLine.work}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </WrapperExperience>
  );
};
