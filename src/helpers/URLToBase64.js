export const URLToBase64 = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.send();
}

// export const URLToBase64 = (url, callback) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.responseType = "blob";
//     xhr.onload = function (e) {
//         // console.log(this.response);
//         let reader = new FileReader();
//         reader.onload = function(event) {
//             let res = event.target.result;
//             callback(res)
//         }
//         let file = this.response;
//         reader.readAsDataURL(file)
//     };
//     xhr.send()
// }