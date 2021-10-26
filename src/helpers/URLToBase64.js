export const URLToBase64 = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        let reader = new FileReader();
        reader.onload = function(event) {
            callback(reader.result);
        }
        let file = this.response;
        reader.readAsDataURL(file)
    };
    xhr.send()
}
