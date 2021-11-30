let toast_short = new Toast({
    message: 'Yep, works!',
    type: 'success',
    position: 'top',
    duration: 'short'
});

let toast_long = new Toast({
    message: 'This might take longer to read!',
    type: 'warning',
    position: 'bottom',
    duration: 'long',
})

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        
        let button_short = document.querySelector("#button_short");
        button_short.addEventListener("click", function () {
            toast_short.show();
        });

        let button_long = document.querySelector("#button_long");
        button_long.addEventListener("click", function () {
            toast_long.show();
        });

    }
};