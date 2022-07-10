"use strict";

type StrOrNum = string|number;
type objWidthName = {
    name: string,
    uid: StrOrNum,
};

const logDetails = (uid: StrOrNum, item: string): void => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user:objWidthName): void => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user:objWidthName): void => {
    console.log(`${user.name} says hello`);
}