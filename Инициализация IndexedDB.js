const request = indexedDB.open("RustubesDB", 1);
request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore("videos", { keyPath: "id" });
    db.createObjectStore("users", { keyPath: "name" });
};
