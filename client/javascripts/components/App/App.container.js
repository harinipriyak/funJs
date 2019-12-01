import { connect } from 'react-redux';
import {
  getemployeeName,
} from '../../actions';

const mapStateToProps = state => ({
    result: state.sampleReducer.employeeName,
})

const mapDispatchToProps = dispatch => {
  return {
    callgetemployeeName: (keyword) => dispatch(getemployeeName(keyword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
