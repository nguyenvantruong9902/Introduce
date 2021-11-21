import React from 'react';

interface ExperienceProps {
  visible?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ visible }) => {
  return <div className="flex justify-center relative">Experience</div>;
};
