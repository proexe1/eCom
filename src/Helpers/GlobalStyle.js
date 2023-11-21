import {StyleSheet} from 'react-native';
import {hp} from './Constant';
import {Colors} from './Colors';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TextFieldIcon: {width: 20, height: 20, marginLeft: 10},
  // Below Register page's Styles
  icon: {
    marginTop: 155,
  },
  Btn: {
    backgroundColor: '#40BFFF',
    width: 343,
    height: 57,
    borderRadius: 5,
    marginTop: 16,
    justifyContent: 'center',
  },
  Btn_text: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
  },
  started: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
    textAlign: 'center',
  },
  newAc: {
    marginTop: hp(1.5),
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
  },
  haveAC: {
    fontWeight: '500',
    color: 'black',
    fontSize: 18,
  },
  SignIn: {
    fontWeight: '700',
    color: '#40BFFF',
    fontSize: 18,
    paddingLeft: 5,
  },
  fontWeight: {
    fontWeight: 'bold',
  },
  directionRow: {
    flexDirection: 'row',
  },
});
