'use strict';

let consolePrinter = (() => {
    'use strict';

    const SEPARATOR = '------';
    const SPACE     = '';

    let logValue = (value) => {
        let isValueArray = Array.isArray(value);

        switch (isValueArray) {
            case true:
                console.log(...value);
                break;
            default:
                console.log(value);
        }
    };
    let addSeparator = () => console.log(SEPARATOR);
    let addSpace = () => console.log(SPACE);

    let print = (value) => {
        logValue(value);
    };

    let printWithSeparatorAndSpaces = (value) => {
        addSpace();
        addSeparator();
        addSpace();
        logValue(value);
    };

    return {
        print,
        printWithSeparatorAndSpaces
    };
})();

exports.print = consolePrinter.print;
exports.printWithSeparatorAndSpaces = consolePrinter.printWithSeparatorAndSpaces;
