function saveProfile() {
    currentUser.name = n;
    currentUser.avatar = a;
    transaction.objectStore("users").put(currentUser);
}
