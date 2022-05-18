import React from 'react';

import Sidebar from '../SidePanel/SidePanel';
import Right from './Right';
import { Wrapper } from './style';

function Content() {
  return (
    <Wrapper>
      <Sidebar />
      <Right />
    </Wrapper>
  );
}

export default Content;
