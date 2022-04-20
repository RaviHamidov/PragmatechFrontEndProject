(function yazici(i) {
    if (i > 0) {
        yazici(i - 1);
        console.log(i);
    }
    return;
})(100)