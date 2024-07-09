let isPersonReady = true; // or false, depending on your logic

function makeCake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPersonReady) {
                resolve("cake is done!");
            } else {
                reject(new Error("No premix!"));
            }
        }, 2000);
    });
}

makeCake()
    .then((result) => {
        document.getElementById('status').textContent = result;
        return "2:00pm";
    })
    .then((time) => {
        console.log(`Hello world! ${time}`);
    })
    .catch((error) => {
        document.getElementById('status').textContent = error.message;
    });