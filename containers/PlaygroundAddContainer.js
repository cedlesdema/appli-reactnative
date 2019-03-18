import {connect} from "react-redux";
import PlaygroundAddScreen from "../screens/PlaygroundAddScreen";
import {addPlayground} from "../redux/actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addPlayground: (playground, cb) => dispatch(addPlayground(playground, cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaygroundAddScreen);