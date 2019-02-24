function alternatingSums(a) {
    var team1 = 0;
    var team2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2) team2 += a[i];
        else team1 += a[i];
    }

    return [team1, team2];
}