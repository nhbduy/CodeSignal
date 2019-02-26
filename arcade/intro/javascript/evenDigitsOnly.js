function evenDigitsOnly(n) {
    var check = n.toString().match(/[1|3|5|7|9]/);

    return !check; //check ? false : true;
}