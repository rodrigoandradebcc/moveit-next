import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span>Desafio completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
