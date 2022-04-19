import React from 'react';
import { FcGraduationCap } from 'react-icons/fc';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { WrapperExperience } from './Experience.styles';

import 'react-vertical-timeline-component/style.min.css';

export const timeLines = [
  // {
  //   date: '09/2017 - 12/2019',
  //   title: 'Student',
  //   works: [
  //     'Learn Information Technology (Software Application)',
  //     'I used 70% for practice and only 30% for theory all my time when I was in this college',
  //     'I have done many projects. Such as Find Homestay',
  //   ],
  //   workLocation: 'FPT Polytechnic College',
  //   address: 'Lien Chieu District, Da Nang',
  //   icon: <FcGraduationCap />,
  // },
  {
    date: '09/2020 - Present',
    title: 'ReactJS Developer',
    companies: [
      {
        name: 'HDWEBSOFT Software Development Company',
        address: 'Tan Binh District, Ho Chi Minh',
        position: 'Front-end Developer, Mobile Developer',
        teamSize: '7+',
        keywords: 'ReactJS, React Native, Javascript, Typescript',
        responsibilities: [
          'Discuss to resolve the problems or generate the new ideas for projects',
          'Learn a new technology and a framework',
          'Support colleagues and resolve their problems',
          "Almost all projects that I've participated in, I'm the main FE",
        ],
        achievements: [
          'How to work a project with a group',
          'Increased ability to work and learned new technology: Arcgis',
          'Learning React Native framework',
          'Learned new ideas for working',
          'Worked on many projects about E-commerce',
          'Evaluated very well about ability to work by colleagues and leaders',
          'Suggested for promotion by the leaders',
        ],
      },
      {
        name: 'BeautyBooking',
        address: 'District 1, Ho Chi Minh',
        position: 'Full-stack Developer',
        teamSize: '5+',
        keywords: 'ReactJS, NestJS, Typescript',
        responsibilities: [
          'Discuss to resolve the problems or generate the new ideas for project',
          'Support colleagues and resolve their problems',
          'Coding for BE and FE',
        ],
        achievements: [
          'This is the first actual project which I’ve participated in',
          'A senior has supported how to code well',
          'Learned how to use Figma',
          'Learning new ideas and how to resolve a problem',
          'Learning NestJS, Storybook, and Graphql',
          'Suggested for new solution and new challenges from leaders',
        ],
      },
    ],
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
          date="09/2017 - 12/2019"
          iconStyle={{ background: 'white' }}
          icon={<FcGraduationCap />}
        >
          <h3 className="font-bold mb-4">Student</h3>
          <div className="font-bold">FPT Polytechnic College</div>
          <div className="text-right italic text-xs">Lien Chieu District, Da Nang</div>
          <ul className="list-disc opacity-70">
            <li>I used 70% for practice and only 30% for theory all my time when I was in this college</li>
            <li>I have done many projects. Such as Find Homestay</li>
            <ul className="list-disc pl-8">
              <li>
                Backend: <br />
                <a href="https://gitlab.com/nguyenvantruong9902/api-findhomestay">
                  https://gitlab.com/nguyenvantruong9902/api-findhomestay
                </a>
              </li>
              <li>
                Frontend: <br />
                <a href="https://gitlab.com/nguyenvantruong9902/web-findhomestay">
                  https://gitlab.com/nguyenvantruong9902/web-findhomestay
                </a>
              </li>
            </ul>
          </ul>
        </VerticalTimelineElement>
        {timeLines.map((timeLine) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.5)' }}
            date={timeLine.date}
            iconStyle={{ background: 'white' }}
            icon={timeLine.icon}
          >
            <h3 className="font-bold mb-4">{timeLine.title}</h3>
            {timeLine.companies.map((company, index) => (
              <div key={index}>
                <div className={`font-bold ${index > 0 ? 'mt-4' : 'mt-0'}`}>{company.name}</div>
                <div className="mb-4 text-right text-xs italic">{company.address}</div>
                <div className="opacity-70">
                  <div>Position: {company.position}</div>
                  <div>Team size: {company.teamSize}</div>
                  <div>Keywords: {company.keywords}</div>

                  <div className="mt-4">Responsibilities</div>
                  <ul className="list-disc ml-8">
                    {company.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>

                  <div className="mt-4">Achievements</div>
                  <ul className="list-disc ml-8">
                    {company.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </WrapperExperience>
  );
};
