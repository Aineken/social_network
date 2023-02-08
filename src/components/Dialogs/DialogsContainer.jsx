import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {sendMessageCreator} from "../../app/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose(connect(mapStateToProps, {sendMessage:sendMessageCreator}), withAuthRedirect)(Dialogs);