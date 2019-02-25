function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft == friendsLeft && yourRight == friendsRight) return true;
    else if (yourLeft == friendsRight && yourRight == friendsLeft) return true;

    return false;
}