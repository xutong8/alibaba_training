import React from "react";
import styles from "./index.module.scss";

const Record = () => {
  // 处理按钮点击事件
  const handleButtonClick = async () => {
    let stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    // 需要更好的浏览器支持
    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
      ? "video/webm; codecs=vp9"
      : "video/webm";
    let mediaRecorder = new MediaRecorder(stream, {
      mimeType: mime,
    });
    // 存储数据
    const chunks = [] as any[];
    mediaRecorder.addEventListener("dataavailable", (e) => {
      chunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      let blob = new Blob(chunks, {
        type: chunks[0].type,
      });
      let url = URL.createObjectURL(blob);

      const video = document.querySelector("video") as HTMLVideoElement;
      video.src = url;
      // 保存到本地
      let a = document.createElement("a");
      a.href = url;
      a.download = "video.webm";
      a.click();
    });

    // 必须手动启动
    mediaRecorder.start();
  };

  return (
    <div className={styles.record}>
      <video controls className={styles.video} />
      <button className={styles.btn} onClick={handleButtonClick}>
        🎯record
      </button>
    </div>
  );
};

export default Record;
