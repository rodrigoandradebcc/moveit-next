import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Button } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  function startCountdown(){
    setIsActive(true);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout)
    setIsActive(false);
    setTime(25*60);
  }

  useEffect(()=>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  },[isActive, time]);
  
  return (
      <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button disabled>
          Ciclo encerrado
        </Button>
      ) : (
        <>
            {isActive ? (
          <Button active onClick={resetCountdown}>
            Abandonar ciclo
          
          </Button>
            ): (
              <Button onClick={startCountdown}>
                Iniciar um ciclo
              </Button>
            )}
        </>
      )}

      
      </>    
  );
};

export default Countdown;
