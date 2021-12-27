import React from "react";
import MusicForm from "./MusicForm";

const MusicList = ({ musicList }) => {

    return (
        <div className="music-wrapper flex justify-center">
            <ul className="music-list">
                {musicList.map(music => {
                    return <MusicForm music={music} key={Math.random()}/>
                })}
            </ul>
        </div>
    )

}

export default MusicList
