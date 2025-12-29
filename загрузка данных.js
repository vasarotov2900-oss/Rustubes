function loadAll() {
    const transaction = db.transaction(["videos"], "readonly");
    const store = transaction.objectStore("videos");
    const req = store.getAll();
    req.onsuccess = () => {
        allVideos = req.result.reverse();
        renderVideos(allVideos);
    };
}
