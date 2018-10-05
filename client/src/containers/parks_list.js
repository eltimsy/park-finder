import { connect } from 'react-redux';
import ParksList from '../components/parks_list';
import { addPark } from '../actions/list_actions';

/*
 This is a redux specific function.
 What is does is: It gets the state specified in here from the global redux state.
 For example, here we are retrieving the list of items from the redux store.
 Whenever this list changes, any component that is using this list of item will re-render.
 */
const mapStateToProps = state => ({
    park: state.parks,
})

const mapDispatchToProps = dispatch => ({
  addPark: (name, location) => {
    dispatch(addPark(name, location));
  },
});

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(ParksList);
