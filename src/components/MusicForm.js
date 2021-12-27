import React from "react";

const MusicForm = ({music}) => {

    const checkSelected = (e) => {
        music.selected = !music.selected
    }

    return(
        
        <div className="music">
            <label className="flex">
                <input type="checkbox" onClick={checkSelected}/>
                <div className="album-image"></div>
                <div className="music-item">{music.value}</div>
            </label>
        </div>
    )
}

export default MusicForm