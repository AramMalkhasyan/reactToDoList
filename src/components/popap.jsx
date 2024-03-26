import { React } from "react";


function Popap({changingYes, changingNo}) {

    return (
        <div className="popapContainer">
            <div className="innerPopapContainer">
            <p>are you sure you want to delete?</p>
            <div className="buttonBlock">
                <button className="yesButton" onClick={() => {changingYes()}}>Yes</button>
                <button className="noButton" onClick={() => {changingNo()}}>No</button>
            </div>
            </div>
        </div>
    )
}


export default Popap
