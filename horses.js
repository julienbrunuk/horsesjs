// requires Mootools

var Horses = function (outerHorsesElements, options) {
    options = (typeof options === "undefined") ? {} : options;
    this.options = options;
    this.innerhorses = $(outerHorsesElements).getElements('horserider').getElements('.horse');
    this.numberOfHorses = $(outerHorsesElements).getElement('.horserider').getElements('.horse').length;
    this.horseWidth = $(outerHorsesElements).getElement('.horserider').getElement('.horse').getStyle('width').replace('px', '');
    this.horseHeight = $(outerHorsesElements).getElement('.horserider').getElement('.horse').getStyle('height').replace('px', '');
    this.pPosition = 1
    if (typeof this.options.vertical == 'undefined') {
        this.options.vertical == false;
    }


    if (typeof options.paneWidth != undefined) {
        $(outerHorsesElements).setStyle('width', (options.paneWidth * this.horseWidth) + 'px');
    } else {
        $(outerHorsesElements).setStyle('width', this.horseWidth + 'px');
        this.options.paneWidth = 1;
    }

    this.updateDims = function () {
        if (this.options.vertical == true) {
            $(outerHorsesElements).setStyle('width', this.horseWidth + 'px');
            $(outerHorsesElements).setStyle('height', (options.paneWidth * this.horseHeight) + 'px');
            $(outerHorsesElements).getElement('.horserider').setStyle('height', this.numberOfHorses * 100 + '%');
            $(outerHorsesElements).getElement('.horserider').setStyle('width', '100%');
        } else {
            $(outerHorsesElements).getElement('.horserider').setStyle('width', this.numberOfHorses * 100 + '%');
            $(outerHorsesElements).getElement('.horserider').setStyle('height', '100%');
        }
    }
    this.updateDims();
    this.jumpTo = function (position) {
        //$(outerHorsesElements).getElement('.horserider').setStyle('display', 'none');

        var hPos = this.horseWidth - (position * this.horseWidth);
        var hPosV = this.horseHeight - (position * this.horseHeight);
        if (this.options.vertical == true) {
            $(outerHorsesElements).getElement('.horserider').setStyle('top', hPosV + 'px');
        } else {
            $(outerHorsesElements).getElement('.horserider').setStyle('left', hPos + 'px');
        }
        this.pPosition = position;
    };

    this.nextPane = function () {
        nextP = 1;
        if (this.pPosition >= this.numberOfHorses - this.options.paneWidth + 1) {
            nextP = 1;
        } else {
            nextP = this.pPosition + 1;
        }
        this.jumpTo(nextP);
    }

    this.previousPane = function () {
        nextP = 1;
        if (this.pPosition == 1) {
            nextP = 1;
        } else {
            nextP = this.pPosition - 1;
        }
        this.jumpTo(nextP);
    }

    this.inject = function (elToInject) {
        elToInject.inject($(outerHorsesElements).getElement('.horserider'));
        this.numberOfHorses++;
        this.updateDims();
    }


    return true;
};
