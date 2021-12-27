import React, { useState } from "react";

const MusicButton = ({ musicList, setMusicList }) => {

    const addMusic = (e) => {

        

        console.log(e.target.files)

        // 음악 추가해주기
        setMusicList([...musicList, {
            value: 2,
            selected: false
        }])

        // console.log(musicList)

    }

    const deleteMusic = () => {
        setMusicList(musicList.filter(music => music.selected === false))
    }

    return (
        // shatout: ghHwang
        <div className="button-wrapper">

            <div className="play-stop-btn flex justify-center">
                <button className="back-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 rounded-full duration-500 text-2xl">
                    <i className="fas fa-backward"></i>
                </button>

                <button className="play-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 rounded-full duration-500 text-2xl">
                    <i className="fas fa-play-circle"></i>
                </button>

                <button className="next-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 rounded-full duration-500 text-2xl">
                    <i className="fas fa-forward"></i>
                </button>
            </div>

            <div className="add-or-delete-btn flex justify-end">
                <label>
                    <i className="add-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 rounded-full duration-500 text-2xl far fa-plus-square"></i>
                    <input type="file" onClick={addMusic} hidden/>
                </label>

                <button className="delete-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 rounded-full duration-500 text-2xl" onClick={deleteMusic}>
                    <i className="fas fa-trash-alt" onClick={deleteMusic}></i>
                </button>
            </div>

        </div>

    )

}

export default MusicButton
