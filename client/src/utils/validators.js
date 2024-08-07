export function checkIfiSNotValidNum(data) {
    const result = Number(data);
    
    return isNaN(result);
};

export function checkCorrectStartPhoneNum(data) {
    return data.startsWith('+');
}

export function twoPasswordsMatch(pass1, pass2) {
    return pass1 === pass2;
}

export function emailIsValid(data) {
    return data.includes("@");
}