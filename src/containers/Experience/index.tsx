import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { WrapperExperience } from './Experience.styles';

import 'react-vertical-timeline-component/style.min.css';
interface ExperienceProps {
  visible?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ visible }) => {
  return (
    <WrapperExperience className="flex justify-center relative border-t border-solid border-white">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
          date="2011 - present"
          iconStyle={{ background: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
          date="2011 - present"
          iconStyle={{ background: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
          date="2011 - present"
          iconStyle={{ background: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
          date="2011 - present"
          iconStyle={{ background: 'white' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </WrapperExperience>
  );
};
