import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/3511851?s=460&u=9b8f93fcf5617b0711a57d8514657a3c1a564786&v=4" alt=""/>
      <div>
        <strong>Rod Andrade</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
