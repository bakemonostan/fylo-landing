import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <img src={Logo} alt='Fylo logo' />
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
  width: 100%;
  padding: 1.25rem;

  .logo {
    height: 30px;
  }

  .nav-list {
  }

  .nav-items {
    display: flex;
    gap: 1rem;
    list-style: none;
    font-size: 14px;
    margin-top: 2rem;
  }

  @media (min-width: 750px) {
    padding: 1.25rem 4rem;
    margin: 0 auto;

    .logo {
      height: 50px;
    }

    .nav-items {
      gap: 3rem;
      font-size: 1rem;
    }
  }
`;

export default Navbar;
