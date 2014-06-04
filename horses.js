// requires Mootools

var Horses = function (outerHorsesElements, options) {
    options = (typeof options === "undefined") ? {} : options;
    this.options = options;
    if (typeof this.options.innerHorse == 'undefined') {
        this.options.innerHorse = '.horserider'
    }
    this.innerhorses = $(outerHorsesElements).getElements('horserider').getElements('.horse');
    this.numberOfHorses = $(outerHorsesElements).getElement(this.options.innerHorse).getElements('.horse').length;
    this.horseWidth = $(outerHorsesElements).getElement(this.options.innerHorse).getElement('.horse').getStyle('width').replace('px', '');
    this.horseHeight = $(outerHorsesElements).getElement(this.options.innerHorse).getElement('.horse').getStyle('height').replace('px', '');
    this.pPosition = 1
    if (typeof this.options.vertical == 'undefined') {
        this.options.vertical == false;
    }

    $(outerHorsesElements).setStyle('overflow', 'hidden');

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
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('height', this.numberOfHorses * 100 + '%');
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('width', '100%');
        } else {
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('width', this.numberOfHorses * 100 + '%');
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('height', '100%');
        }
    }
    this.updateDims();
    this.jumpTo = function (position) {
        //$(outerHorsesElements).getElement(this.options.innerHorse).setStyle('display', 'none');

        var hPos = this.horseWidth - (position * this.horseWidth);
        var hPosV = this.horseHeight - (position * this.horseHeight);
        if (this.options.vertical == true) {
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('top', hPosV + 'px');
        } else {
            $(outerHorsesElements).getElement(this.options.innerHorse).setStyle('left', hPos + 'px');
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
        elToInject.inject($(outerHorsesElements).getElement(this.options.innerHorse));
        this.numberOfHorses++;
        this.updateDims();
    }


    return true;
};
