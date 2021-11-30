let toast = new Toast({
    message: 'Button clicked!',
    type: 'success',
    position: 'top',
    duration: 'short'
});

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        
        let button = document.querySelector("button");
        button.addEventListener("click", function () {
            toast.show();
        });

    }
};