import React from 'react';
import styled from '@emotion/styled';

import { Hobby } from './containers/Hobby';
import { Information } from './containers/Information';
import { Experience } from './containers/Experience';

const App: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <StyledWrapper className="bg-no-repeat bg-center bg-cover">
      <Information visible={visible} />
      <Hobby visible={visible} />
      <Experience visible={visible} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

export default App;
