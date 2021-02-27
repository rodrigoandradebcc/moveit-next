import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/3511851?s=460&u=9b8f93fcf5617b0711a57d8514657a3c1a564786&v=4" alt="" />
      <div>
        <strong>Rod Andrade</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
