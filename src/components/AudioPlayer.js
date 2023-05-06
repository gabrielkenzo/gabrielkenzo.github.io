import { useState } from "react";
import { tracks } from "../data/tracks";

import AlbumCover from "./AlbumCover";
import Controls from "./Controls";

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    return (
        <div className="audio-player">
            <div className="inner">
                <AlbumCover track={currentTrack} />
                <Controls
                    track={currentTrack}
                    tracks={tracks}
                    trackIndex={trackIndex}
                    setTrackIndex={setTrackIndex}
                    setCurrentTrack={setCurrentTrack}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;