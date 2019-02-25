function addBorder(picture) {
    var len = picture[0].length + 2;

    return ['*'.repeat(len),
        ...picture.map(function (t) {
            return '*' + t + '*';
        }), '*'.repeat(len)
    ];
}