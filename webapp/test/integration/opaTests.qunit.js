/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["trial1/trial1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
