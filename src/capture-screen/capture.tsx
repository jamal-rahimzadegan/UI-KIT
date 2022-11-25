import React, { useEffect, useState } from 'react';
import './Capture.css';

export default function Capture(): JSX.Element {
  const [imgSrc, setImgSrc] = useState<string>('');

  const startStreaming = () => {
    try {
      let video = document.getElementById('video');
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => video.play();
      });
    } catch (e) {
      alert('Can not access your camera, please make sure it has access');
    }
  };

  const capture = async () => {
    let video = document.getElementById('video');
    let canvas = document.getElementById('video-canvas');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // x, y, width, height

    const imgData = canvas.toDataURL();
    setImgSrc(imgData);
    saveCapturedImg(imgData, 'screenshot-react');
  };

  const saveCapturedImg = (data: string, name: string) => {
    const downloadBtn = document.getElementById('capture-btn');
    downloadBtn.href = data;
    downloadBtn.download = name;
  };

  useEffect(startStreaming, []);

  return (
    <>
      <a href="" id="capture-btn" onClick={capture}>
        Capture
      </a>
      <canvas id="video-canvas" />
      <video muted autoPlay controls id="video" />
      {imgSrc ? <img className="preview-img" src={imgSrc} /> : null}
    </>
  );
}
