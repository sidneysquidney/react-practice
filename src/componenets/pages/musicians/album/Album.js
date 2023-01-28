import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioComponent.css";
import "./Album.css";
import { FaClock } from "react-icons/fa";
import React, { useState } from "react";
import import_tracks from "./tracks";
// import album_cover from "../../../../assets/windows_logo.jpeg";
const album_cover =
  "https://lh3.googleusercontent.com/mypQYIWK1KKKpqkUjnpQTScWm_51sPL-dXDuyDQuJE2GTsfNy4BkSyxh6GnboYZPcKKw87mktxbYRzxw71G3CJTG8NR8ixQrZEXX9aHvgmdytebOFfJiANlNJMLZnYl7OQql6d1CVH3ILY18kYO0whYXnwkv5eagd9ipqN69RYm_xd6hFfnGS9ahcVSI88VQeVd2zNh1z1qavLU_oQJDJcu6MyZjP0cWe5dH_ANO0l0bADoFKxrSS8CVmSVJLOwXRnAlcpUkmgtXaabTqukz7blpwk18NeXbFvmJARulReDKV0n5ctmaUm9LmtJiEr49L_8zxdNfwvt0Wf6JPGBvkhRAlgmAAbJj5ddbAT21qVBM7RonlyqhFQt8kiicgbxsnUx9C1ElBaKwhLT5U2LC4ouhl5GuZ8WnBSnjzmOxQx9jpmzREpyDy9jJlw-kvZBrv-FzDNnNQIHCfa68k55Pg8SNwaXBP9chjctKo71Qw-khw9opKjfiS3IRlKX3nFUdHtPUKBca82VcS-9WedKeKLOXrih1iDdhko24cJ3Jip1AStWRBRpinyqPcB91jzQzUyyPYLVjk-O9q8WAOtoH2qDwmpPzNkcKQAzKo_zfQu-co8E5Z497LZPY25nP9IatIcPWQn9oalkO_vx-S__nLNOhhILajWVJJ65WConl8X73vtJYLrC5HmqKlq4zy7Tk8ufvEkird4Yb_z51PG_RADoTTgajMm53veuacnV4Ra8l1DhKGoxQABdYmGUIsX48TIT635R-Yepz80B83XhaoyRK0-UvK0l3DDJtDdicZmj3pTXNv18-IO04b7gwp3CU5oNlzJSDFDOrvBDxPrbEd3QJIFe_Knb4Wbb_DnFZagyXW7YQG9W0gyMBqGA3MMuue_Z5hLvA_ChLs2oHrNTzVAkDYGA6NDV7w1hn7RDgJBY5Ve7z=w311-h297-no?authuser=0";

export default function Album() {
  const tracks = import_tracks;

  const [trackIndex, setTrackIndex] = useState(0);

  // Destructure for conciseness
  const { title, artist, audioSrc } = tracks[trackIndex];

  // these 2 from audiocomponent
  const onNextButton = () => {
    setTrackIndex((trackIndex + 1) % tracks.length);
  };

  const onPreviousButton = () => {
    setTrackIndex((trackIndex + tracks.length - 1) % tracks.length);
  };

  return (
    <div className="album-container">
      <h2 className="alternate-section-title">
        Greatest Hits - An Artist's Touch{" "}
      </h2>
      <div className="album-info-container">
        <div className="picture-player-container">
          <img
            className="album-image"
            src={album_cover}
            alt={`track artwork for ${title} by ${artist}`}
          />

          <AudioPlayer
            // autoPlay={false}
            showSkipControls
            showJumpControls={false}
            // autoPlayAfterSrcChange={false}
            hasDefaultKeyBindings={false}
            src={audioSrc}
            onClickNext={onNextButton}
            onClickPrevious={onPreviousButton}
            onPlay={(e) => console.log("onPlay")}
            customAdditionalControls={[]}
            customVolumeControls={[]}
            layout="stacked-reverse"

            // other props here
          />
        </div>
        <div className="album-text-container">
          <div className="album-header">
            <div className="album-header1">
              <p className="album-header-text">#</p>
            </div>
            <div className="album-header2">
              <p className="album-header-text">TITLE</p>
            </div>
            <div className="album-header3">
              <FaClock />
            </div>
          </div>
          <div className="album-line"></div>
          {tracks.map((track, index) => {
            return (
              <div className="album-track">
                <div className="album-header1">
                  <p
                    className={
                      index === trackIndex
                        ? "text-aqua-blue album-number-text"
                        : "album-number-text"
                    }
                    onClick={() => {
                      setTrackIndex(index);
                    }}
                  >
                    {index + 1}
                  </p>
                </div>
                <div className="album-header2">
                  <p
                    className={
                      index === trackIndex
                        ? "text-aqua-blue album-title-text"
                        : "album-title-text"
                    }
                  >
                    {track.title}
                  </p>
                  <p
                    className={
                      index === trackIndex
                        ? "text-aqua-blue album-artist-text"
                        : "album-artist-text"
                    }
                  >
                    {track.artist}
                  </p>
                </div>
                <div className="album-header3">
                  <p
                    className={
                      index === trackIndex
                        ? "text-aqua-blue album-duration-text"
                        : "album-duration-text"
                    }
                  >
                    {track.track_duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
