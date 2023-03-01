import React, {useEffect} from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {requestAllDialogs, requestDialogs, sendMessage} from "../../app/dialogs-reducer";
import Preloader from "../common/Preloader/Preloader";


const DialogsContainer = ({requestAllDialogs, isFetching, ...props}) => {

    useEffect(() => {
        requestAllDialogs();
    }, [requestAllDialogs])

    return (<>
        {isFetching? <Preloader/> : <Dialogs {...props}/>}
    </>
    );
};


let mapStateToProps = (state) => {

    const {
        dialogsPage: {
            isFetching, ...restProps
        }
    } = state;

    return {
        dialogsPage: restProps,
        isFetching: isFetching
    }
}

const mapDispatchToProps = {
    sendMessage,
    requestAllDialogs: requestAllDialogs,
    requestDialogs,
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: (newMessageBody) => {
//             dispatch(sendMessageCreator(newMessageBody));
//         },
//         requestDialogs:() => {
//             dispatch(requestDialogs());
//         },
//     }
// }
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer);