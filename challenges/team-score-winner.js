'use strict';

const calcAverage = (n1,n2,n3) => (n1 + n2 + n3) / 3;

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas * 2})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins * 2})`;
    } else {
        return 'No team wins...';
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
