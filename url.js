
class API {

    method = "GET";
    #secure = false;

    constructor(url) {
        this.url = url;
    }

    isSecure() {
        return this.#secure === true;
    }

    updateUrl(url) {
        this.url = url;
        let urlCode = url.split(":");
        if (urlCode[0] === "https") {
            return this.#secure = true;
        } else if (urlCode[0] === "http") {
            return this.#secure = false;
        }
    }
}
// const s = new API('http://api.com/api/hello')
// console.log(s.isSecure()) // false

// s.updateUrl('https://api. com/api/hello')
// console.log(s.isSecure()) // true

// console.log(s.url) // https://api. com/api/hello

// console.log(s.method) // GET

// console.log(s.secure) // undefined (because private field)