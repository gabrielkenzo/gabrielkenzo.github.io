const AlbumCover = ({ track }) => {
    return (
        <div>
            <img
                className="album-cover"
                src={track.cover}
                alt={track.title}
            />
        </div>
    );
};

export default AlbumCover;