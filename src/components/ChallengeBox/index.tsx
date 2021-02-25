import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <S.ChallengeFailedButton onClick={resetChallenge}>Falhei</S.ChallengeFailedButton>
            <S.ChallengeSucceededButton>Completei</S.ChallengeSucceededButton>
          </footer>
        </S.ChallengeActive>
      ) : (

          <S.ChallengeNotActive>
            <strong>
              Finalize um ciclo
              para receber um desafios
            </strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avançe de level completando desafios
            </p>
          </S.ChallengeNotActive>

        )}

    </S.Container>
  );
};

export default ChallengeBox;
