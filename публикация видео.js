function publishVideo() {
    const reader = new FileReader();
    reader.onload = function(e) {
        const newVid = {
            id: Date.now(),
            blob: e.target.result, // Сохранение видео как ArrayBuffer
            // Другие поля
        };
        transaction.objectStore("videos").add(newVid);
    };
    reader.readAsArrayBuffer(file);
}
