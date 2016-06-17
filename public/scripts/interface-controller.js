var interfaceController = (function () {
    'use strict';

    return {
        updateTrackingValue: function (tracking) {
            document.querySelector('.twitter-tracker__tracking').innerHTML = tracking;
        }
    };
})();
