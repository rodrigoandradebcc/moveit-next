import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, Button } from './styles';


const Countdown: React.FC = () => {
  const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  
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
