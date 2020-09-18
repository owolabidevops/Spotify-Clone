import React from 'react';
import  "./SongRow.css";



function SongRow({track}) {
    return (
        <div className="song-row">
        <img 
        className="song-row-album"
        src={track.album.images[0].url}  alt="" />
        <div className="songrow-info">
             <h1>{track.name}</h1>
        </div>
        <p>
            {track.artists.map((artist)=> artist.name).join(",")} -{""}
            {track.album.name}
        </p>
            
        </div>
    )
}

export default SongRow
