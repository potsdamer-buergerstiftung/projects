import * as QR from "qrcode";

export default eventHandler((event) => {
    QR.toDataURL("asd", (err, url) => {
        console.log(url);
    });
});
