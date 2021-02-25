import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { Container } from '../styles/styles';
import Head from 'next/head';
import ChallengeBox from '../components/ChallengeBox';

export default function Home() {
  return (
    <Container>

      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown />
        </div>
        <div>
          <ChallengeBox></ChallengeBox>
        </div>
      </section>
    </Container>
  )
}
