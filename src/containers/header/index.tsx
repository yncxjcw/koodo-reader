import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  handleSortDisplay,
  handleMessageBox,
  handleMessage,
  handleSetting,
  handleAbout,
  handleTipDialog,
  handleTip,
  handleBackupDialog,
} from "../../store/actions";
import { stateType } from "../../store";
import Header from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    isSearch: state.manager.isSearch,
    isAboutOpen: state.manager.isAboutOpen,
    bookmarks: state.reader.bookmarks,
    books: state.manager.books,
    isNewWarning: state.manager.isNewWarning,
    notes: state.reader.notes,
    isCollapsed: state.sidebar.isCollapsed,

    isSortDisplay: state.manager.isSortDisplay,
  };
};
const actionCreator = {
  handleSortDisplay,
  handleMessageBox,
  handleMessage,
  handleBackupDialog,
  handleSetting,
  handleAbout,
  handleTipDialog,
  handleTip,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(Header as any));
