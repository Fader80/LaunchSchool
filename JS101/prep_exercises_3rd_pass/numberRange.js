function numberRange(argNum) {
    switch(argNum) {
        case argNum >= 0 && argNum <= 50 :
            console.log(`${argNum} is between 0 and 50`);
            break;
        case argNum >= 51 && argNum <= 100 :
            console.log(`${argNum} is between 51 and 100`);
            break;
        case argNum > 100 :
            console.log(`${argNum} is greater than 100`);
            break;
        case argNum < 0 :
            console.log(`${argNum} is less than 0`);
            break;      
    }
}

//THIS CODE IS WRONG