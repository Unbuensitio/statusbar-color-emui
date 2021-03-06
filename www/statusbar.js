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

StatusbarTransparent.prototype.blanco = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'blanco', []);
	}
};
StatusbarTransparent.prototype.negro = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'negro', []);
	}
};
StatusbarTransparent.prototype.verde = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'verde', []);
	}
};
StatusbarTransparent.prototype.azul = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'azul', []);
	}
};
StatusbarTransparent.prototype.rosa = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'rosa', []);
	}
};
StatusbarTransparent.prototype.rojo = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'rojo', []);
	}
};
StatusbarTransparent.prototype.amarillo = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'amarillo', []);
	}
};
StatusbarTransparent.prototype.gris = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'gris', []);
	}
};
StatusbarTransparent.prototype.violeta = function (success, fail) {
	if (this.transparentFlag == false) {
		this.transparentFlag = true;
		cordova.exec(success ? success : null, fail ? fail : null, 'StatusbarTransparent', 'violeta', []);
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
