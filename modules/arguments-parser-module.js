'use strict';

let argumentsParser = (() => {
    'use strict';

    const ARGUMENT_TOKEN        = '--';
    const ARGUMENT_SPLIT_TOKEN  = '=';

    let getArgumentValue = (argumentName) => {
        let argumentValue = '';

        process.argv.map((argument, index, array) => {
            if (argument.indexOf(ARGUMENT_TOKEN) > -1) {
                let splittedArgument = argument.split(ARGUMENT_SPLIT_TOKEN);

                if (splittedArgument[0] === ARGUMENT_TOKEN + argumentName && splittedArgument[1]) {
                    argumentValue = splittedArgument[1];
                }
            }
        });

        return argumentValue;
    };

    return {
        getArgumentValue
    };
})();

exports.getArgumentValue = argumentsParser.getArgumentValue;
