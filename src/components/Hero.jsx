import styled from 'styled-components';

import BgWaves from '../assets/images/bg-curvy-mobile.svg';
import BgWavesDesk from '../assets/images/bg-curvy-desktop.svg';
import BgImg from '../assets/images/illustration-intro.png';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <img src={BgImg} alt='/' className='bg-img' />
      </div>
      <div className='details'>
        <h2 className='head'>
          All your files in one secure location, accessible anywhere.
        </h2>
        <p className='info'>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className='btn'>Get Started</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-blue-1);
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BgWaves});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;

  .bg-img {
    width: 300px;
    padding: 2rem 0;
  }

  .details {
    text-align: center;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 320px;
    text-align: center;

    .head {
      padding: 1rem 0;
      max-width: 320px;
      margin: 0 auto;
      font-family: 'Raleway', sans-serif;
      line-height: 1.4;
    }

    .info {
      max-width: 300px;
      margin: 0 auto;
      font-size: 14px;
    }

    .btn {
      background-color: var(--blue-accent);
      padding: 0.8rem;
      color: white;
      width: 200px;
      border: none;
      border-radius: 30px;
      margin-top: 2rem;
    }
  }

  @media (min-width: 750px) {
    height: auto;
    .bg-img {
      width: auto;
    }

    .details {
      text-align: center;
      position: relative;
      margin: 0 auto;
      text-align: center;

      .head {
        padding: 1rem 0;
        max-width: 320px;
        margin: 0 auto;
        font-family: 'Raleway', sans-serif;
        line-height: 1.4;
      }

      .info {
        max-width: 300px;
        margin: 0 auto;
        font-size: 14px;
      }
    }
  }
`;
export default Hero;
