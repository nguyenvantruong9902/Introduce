import React from 'react';
import styled from '@emotion/styled';

import { Objective } from './containers/Objective';
import { Information } from './containers/Information';
import { Experience } from './containers/Experience';
import { Hobby } from './containers/Hobby';

const App: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <StyledWrapper className="bg-no-repeat bg-center bg-cover">
      <Information visible={visible} />
      <Objective visible={visible} />
      <Experience visible={visible} />
      <Hobby visible={visible} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

export default App;
