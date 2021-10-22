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
    
    
    
    
    // const xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     const reader = new FileReader();
    //     reader.onloadend = function () {
    //         callback(reader.result);
    //     }
    //     reader.readAsDataURL(xhr.response);
    // };
    // xhr.open('GET', url);
    // xhr.responseType = 'blob';
    // xhr.send();

}
