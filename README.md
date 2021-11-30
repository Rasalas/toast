# Toast messages

## Installation
copy the `/toast` directory somewhere in your project and link to both files in your HTML 
```HTML
...
<head>
    ...
    <link rel="stylesheet" href="/{your_dir}/toast/toast.css">
</head>
<body>
    ...
    <script src="/{your_dir}/toast/toast.js"></script>
    ...
</body>
...
```

## Usage
Create an instance of the `Toast` class and pass an object with options as a parameter
```JS
let toast = new Toast({
    message: 'Yep, works!',
    type: 'success',
    position: 'top',
    duration: 'short',
});
```
The options are
```JS
/**
 *   {String} message  - Message to display in the toast
 *   {String} duration - Duration of the toast (long, short)
 *   {String} type     - Type of the toast (success, error, warning, info)
 *   {String} position - Position of the toast (top, bottom)
 */
```
finally call the `show()` function
```JS
toast.show();
```