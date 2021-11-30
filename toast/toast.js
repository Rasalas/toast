class Toast {

    /**
     * @description
     * Display a toast message with the given options.
     * 
     * @param {Object} options
     * @param {String} options.message  - Message to display in the toast
     * @param {String} options.duration - Duration of the toast (long, short)
     * @param {String} options.type     - Type of the toast (success, error, warning, info)
     * @param {String} options.position - Position of the toast (top, bottom)
     */
    constructor(options = {}) {
        let defaults = {
            message: "Toasted!",
            duration: "short",
            type: "success",
            position: "bottom"
        };
        this.options = Object.assign(defaults, options);
        this.constants = Object.freeze({
            SHORT_DELAY: 2000,
            LONG_DELAY: 4000,
            MOVING_DELAY: 500
        });

        this.toast = document.createElement("div");

        this.toast.classList.add("toast");
        this.toast.classList.add(this.options.type);
        this.toast.classList.add(this.options.position);
        this.toast.classList.add("duration-"+this.options.duration);

        this.toast.innerHTML = this.options.message;
        document.body.appendChild(this.toast);
    }

    /**
     * displays the toast
     * 
     * @returns {Toast} this instance of the Toast class
     */
    show() {
        this.toast.classList.add("show");
        setTimeout(() => {
            this.toast.classList.remove("show");
        }, (this.options.duration === "long" ? this.constants.LONG_DELAY+this.constants.MOVING_DELAY : this.constants.SHORT_DELAY+this.constants.MOVING_DELAY));
        return this;
    }
}