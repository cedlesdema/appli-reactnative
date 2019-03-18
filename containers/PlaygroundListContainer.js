import {connect} from "react-redux";
import PlaygroundListScreen from "../screens/PlaygroundListScreen";

const mapStateToProps =state => ({
    playgrounds: state.playgrounds
});

const mapDispatchTopProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(PlaygroundListScreen);