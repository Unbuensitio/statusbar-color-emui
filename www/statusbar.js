function StatusbarTransparent () {
	this.transparentFlag = false;
};

/*
* Enable translucent statusbar
*/
StatusbarTransparent.prototype.enable = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};

StatusbarTransparent.prototype.ffffff = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.000000 = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.00796b = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.0093DE = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.C62F22 = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.F8A724 = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.627a86 = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};
StatusbarTransparent.prototype.4655AA = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', []);
	}
};

/*
* Change color statusbar
*/
StatusbarTransparent.prototype.color = function (success, fail, hexString) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'enable', [hexString]);
	}
};

/*
* Disable translucent statusbar
*/
StatusbarTransparent.prototype.disable = function (success, fail) {
	if (this.transparentFlag == true) {
		this.transparentFlag = false;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'disable', []);
	}
}

/*
*	Toggle the translucent statusbar
*/
StatusbarTransparent.prototype.toggle = function (success, fail) {
	if (this.transparentFlag == true) {
		this.disable(success, fail);
	} else {
		this.enable(success, fail);
	}
};

module.exports = new StatusbarTransparent();
