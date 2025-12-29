function openVideo(id) {
    const blob = new Blob([activeVid.blob], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    vid.src = url; // Воспроизведение через Blob URL
}
