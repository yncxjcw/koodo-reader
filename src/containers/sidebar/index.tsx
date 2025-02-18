import {
  handleMode,
  handleSearch,
  handleSortDisplay,
  handleDragToLove,
  handleDragToDelete,
  handleCollapse,
} from "../../store/actions";
import { connect } from "react-redux";
import { stateType } from "../../store";
import { withTranslation } from "react-i18next";
import Sidebar from "./component";

const mapStateToProps = (state: stateType) => {
  return { mode: state.sidebar.mode, isCollapsed: state.sidebar.isCollapsed };
};
const actionCreator = {
  handleMode,
  handleSearch,
  handleDragToLove,
  handleDragToDelete,
  handleSortDisplay,
  handleCollapse,
};

export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(Sidebar as any));
