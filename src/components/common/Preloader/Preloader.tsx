import preloader from '../../../assets/images/preloader.svg';
import React, {FC} from "react";

const Preloader:FC = () => {
    return (
        <div className="bg-red">
            <img src={preloader} alt="preloader" />
        </div>
)

}

export default Preloader;
