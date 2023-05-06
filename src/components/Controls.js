import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react';

import {
    // IoPlayBackSharp,
    // IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    // IoPlaySharp,
    // IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({
    track,
    tracks,
    trackIndex,
    setTrackIndex,
    setCurrentTrack,
}) => {

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
    };

    return (
        <div>
            {/* <button onClick={handlePrevious}>
                <IoPlaySkipBackSharp />
            </button> */}
            <ReactAudioPlayer
                className="audio-player"
                src={track.src}
                autoPlay={false}
                controls
            />
            {/* <button onClick={handleNext}>
                <IoPlaySkipForwardSharp />
            </button> */}
        </div >
    );
};

export default Controls;