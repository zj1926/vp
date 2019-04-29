import React from 'react';
import { ISMOBILE } from '../../../config/global';
import { Menu, Icon, Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu';
import style from './style.sass';
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
    }
    this.onFBClick = this.onFBClick.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }
  toggleMobileMenu(){
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
  onFBClick(){
    this.props.onOAuth(this.props.facebookUrl);
  }

  onLogout() {
    this.props.onLogout();
  }

  render() {
    const { url, isAuth, detail, authReady } = this.props;
    let imagUrl = isAuth ? detail.get('img') : '//dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png'
    if (__DEV__) {
      imagUrl = 'http://dkny.oss-cn-hangzhou.aliyuncs.com/temp/test_profile.jpeg';
    }
    return (<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={imagUrl} height="28" />
      </Link>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        onClick={this.toggleMobileMenu}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div className={`navbar-menu ${this.state.showMenu ? 'is-active' : ''}`}>
      <div className="navbar-start">
        {
          isAuth &&
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>
    
            <div className="navbar-dropdown">
              <Link className="navbar-item"
                to="/portfolio"
                onClick={this.props.onEnterProfile.bind(null, 'myPortfolio')}
              >
                Profile
              </Link>
              <Link className="navbar-item"
                to="/like"
                onClick={this.props.onEnterProfile.bind(null, 'myLiked')}
              >
                Like
              </Link>
            </div>
          </div>
        }
        
        <Link to="/popular" className="navbar-item">
          Popular
        </Link>
        <hr className="navbar-divider" />
        <Link to="/" className="navbar-item">
          Latest
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>
  
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <a className="navbar-item" href="http://www.colorpk.com" target="_blank">
              ColorPK v2.0
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="https://github.com/im6/vp/issues" target="_blank">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary is-small" to="/new">
              New Color
            </Link>
            {
              !isAuth && authReady &&
              <button className="button is-info is-small" onClick={this.onFBClick}>
                Facebook Login
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  </nav>)
  }

  render_old() {
    const { url, isAuth, detail } = this.props;
    const profileMenu = isAuth ?
    <ProfileMenu
      onClickLogout={this.onLogout}
      onClickProfile={this.props.onEnterProfile}
      username={detail.get('name')} /> : null;
    const menu = <div className={style.loginBox}>
      <img className={this.props.authReady? '' : style.disableClick}
        src="//dkny.oss-cn-hangzhou.aliyuncs.com/4/fb.png"
        onClick={this.onFBClick}
      />
    </div>
    
    return (
      <div className={style.lock}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.props.url]}
          mode="horizontal"
        >
          <Menu.Item key="/popular">
            <Link to="/popular">
              <Icon type="rise" />
              Popular
            </Link>
          </Menu.Item>
          <Menu.Item key="/">
            <Link to="/">
              <Icon type="clock-circle" />
              Latest
            </Link>
          </Menu.Item>
          {
            !ISMOBILE && <Menu.Item key="/about">
              <Link to="/about">
                <Icon type="info-circle" />
                About
              </Link>
            </Menu.Item>
          }
          
        </Menu>
        <div className={style.buttonGroup}>
        {
            url !== '/new' && <Link to="/new">
              <Button type="primary" icon="plus">
                { ISMOBILE ? null: 'New Color'}
              </Button>
            </Link>
          }
          &nbsp;&nbsp;
          {
            isAuth ?
            (<Dropdown overlay={profileMenu}>
              <img src={detail.get('img')} alt="icon"/>
            </Dropdown>) :
            (<Dropdown
              overlay={menu}
              // onVisibleChange={this.onClickLogin}
              trigger={["click"]}
            >
                <Button icon="user">
                  { ISMOBILE ? null: 'Sign In'}
                </Button>
            </Dropdown>)
          }
          
        </div>
      </div>
    );
  }
}

export default Header;