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


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);