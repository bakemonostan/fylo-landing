import styled from 'styled-components';

import BgWaves from '../assets/images/bg-curvy-mobile.svg';
import BgImg from '../assets/images/illustration-intro.png';

const Hero = () => {
  return (
    <Wrapper>{/* <img src={BgImg} alt='/' className='bg-img' /> */}</Wrapper>
  );
};

const Wrapper = styled.div`
  .bg-img {
    width: 100%;
  }
`;
export default Hero;
