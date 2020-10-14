import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { FiUser } from 'react-icons/fi';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import ElectrostoreLogo from '../assets/static/ElectrostoreLogo.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (

    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={ElectrostoreLogo} alt='Electrostore' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <FiUser />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
            <li><Link to='/Login'>Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
