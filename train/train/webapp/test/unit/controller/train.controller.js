/*global QUnit*/

sap.ui.define([
	"ui5/train/train/controller/train.controller"
], function (Controller) {
	"use strict";

	QUnit.module("train Controller");

	QUnit.test("I should test the train controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
