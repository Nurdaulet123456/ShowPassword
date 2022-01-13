let show = false;

function toggle() {
    if (show) {
        document.getElementById('pass').setAttribute('type', 'password');
        show = false;
    } else {
        document.getElementById('pass').setAttribute('type', 'text');
        show = true;
    }

    console.log('asdadsad');
}