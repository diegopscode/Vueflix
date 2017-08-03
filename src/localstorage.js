export default {
    set(item, value) {
        window.localStorage.setItem(item, JSON.stringify(value));
    },
    get(item) {
        return JSON.parse(window.localStorage.getItem(item));
    },
    remove(item) {
        window.localStorage.removeItem(item);
    },
    getUser(name) {
        return this.get("users").find(item => item.name == name);
    },
    updateUser(user, attr = null) {
        var users = this.get("users");
        var index = users.findIndex(item => item.name == user.name);

        if(attr)
            users[index][attr] = user[attr];
        else
            users[index] = user;

        this.set("users", users);
    }
}