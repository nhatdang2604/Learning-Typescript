"use strict";

const logDetails = (uid: string|number, item: string): void => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: string|number}): void => {
    console.log(`${user.name} says hello`);
}