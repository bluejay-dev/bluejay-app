import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actionCreators from '../actions/app';
import App from '../components/App/App';

const mapStateToProps = (props: {}, ownProps: {}) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>, ownProps: {}) => (bindActionCreators(actionCreators, dispatch));

const AppView = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppView;
