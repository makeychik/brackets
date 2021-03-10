module.exports = function check(str, bracketsConfig) {
    const bracketsArray = bracketsConfig.map((bracketsCouple) =>
        bracketsCouple.join("")
    );

    while (str.length > 0) {
        let currentString = str;

        for (let brackets of bracketsArray) {
            currentString = currentString.replace(brackets, "");
        }

        if (str === currentString) {
            return false;
        }

        str = currentString;
    }
    return true;
};
