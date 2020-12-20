//import from library 
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {bullshitIcons, routePaths, TEXT_SIZES} from '../../utils/constants';
import {BLACK, BLUE_1, GRAY_2, GREEN_1, GREEN_2, WHITE, YELLOW_1} from '../../utils/palette';
import logo from '../../assets//images/logo.png';
import {connect} from 'react-redux';
import * as action from '../../redux/action/user.action';
import Modal from 'react-modal';
import AuthModal from './auth.modal';


Modal.setAppElement('#root');
const logo123 = 'FaTwitter';


const headerBarItems = [
  {
    label: 'Luyện gõ',
    screen: routePaths.PRACTICE
  },
  {
    label: 'Soạn thảo',
    screen: routePaths.EDITOR
  },
  {
    label: 'Thi đấu',
    screen: routePaths.ROOM_LIST
  },
  {
    label: 'Thống kê',
    screen: routePaths.STATISTIC
  },
  {
    label: 'Góp ý',
    screen: routePaths.FEEDBACK
  },
  {
    label: 'Cài đặt',
    screen: routePaths.SETTING
  }

];


class HeaderBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_modal_open: false
    };
  }

  openAuthModal = () => {
    this.setState({
      auth_modal_open: true
    });
  };

  closeAuthModal = () => {
    this.setState({
      auth_modal_open: false
    });
  };
  changeBackground = (e, color) => {
    e.target.style.color = color;
  };

  render() {
    const is_login = false;
    const IconName = `Icons.FaHome`;
    const user_infor = this.props.user_infor;

    return (
      <div style={styles.container}>

        <Modal
          isOpen={this.state.auth_modal_open}
          style={styles.modal}>
          <AuthModal
            onCloseModal={this.closeAuthModal}
            onClickClose={this.closeAuthModal}/>
        </Modal>

        <Link to={routePaths.HOME} style={{...styles.col1, textDecoration: 'none'}}>
          <img src={logo} style={styles.logo}/>

        </Link>

        <div style={styles.col2}>

          {
            headerBarItems.map((item) => {
              let defautColor = WHITE;
              if (window.location.pathname === item.screen) {
                defautColor = YELLOW_1;
              }
              return (<button onMouseOver={e => this.changeBackground(e, GREEN_1)}
                              onMouseOut={e => this.changeBackground(e, BLACK)}
                              onClick={e => this.changeBackground(e, GREEN_2)}
                              style={{background: defautColor}}
              >
                <Link to={item.screen}
                      style={styles.item}>
                  {item.label}
                </Link>

              </button>);

            })
          }

        </div>


      </div>

    );
  }
}

const styles = {
  container: {
    width: '100vw',
    height: 60,
    backgroundColor: WHITE,
    boxShadow: '0px 5px 5px #707070',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modal: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  },
  col1: {
    flex: 2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '60%',
    height: '60%'
  },
  col2: {
    flex: 7,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  item: {
    fontSize: TEXT_SIZES.NORMAL,
    color: BLACK,
    textDecoration: 'none',
    hover: {
      backgroundColor: GREEN_1
    }
  },

  col3: {
    flex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  my_account_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  my_account: {
    marginLeft: 10,
    fontSize: TEXT_SIZES.SMALL,
    color: BLACK
  },
  login: {
    fontSize: TEXT_SIZES.SMALL,
    color: BLACK
  }

};

const mapStateToProps = state => ({
  user_infor: state.user_infor
});

export default connect(mapStateToProps, action)(HeaderBarComponent);
