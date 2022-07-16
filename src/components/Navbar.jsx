import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt='Fylo logo' className='logo' />
      </div>
      <div className='nav-list'>
        <ul className='nav-items'>
          <li className='nav-item'>Features</li>
          <li className='nav-item'>Team</li>
          <li className='nav-item'>Sign In</li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  padding: 1rem;

  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    font-size: 12px;
  }

  .logo {
    height: 28px;
  }

  @media (min-width: 750px) {
    padding: 1.25rem 4rem;
    margin: 0 auto;

    .logo {
      height: auto;
    }

    .nav-items {
      gap: 3rem;
      font-size: 1rem;
    }
  }
`;

export default Navbar;
