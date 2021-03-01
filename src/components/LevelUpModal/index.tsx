import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styles';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </S.Container>
    </S.Overlay>
  );
};

export default LevelUpModal;
