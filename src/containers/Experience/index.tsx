import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { timeLines } from './timelines';
import { WrapperExperience } from './Experience.styles';

import 'react-vertical-timeline-component/style.min.css';
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
