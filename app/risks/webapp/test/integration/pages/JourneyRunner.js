sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"np/risks/test/integration/pages/RisksList",
	"np/risks/test/integration/pages/RisksObjectPage"
], function (JourneyRunner, RisksList, RisksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('np/risks') + '/test/flpSandbox.html#nprisks-tile',
        pages: {
			onTheRisksList: RisksList,
			onTheRisksObjectPage: RisksObjectPage
        },
        async: true
    });

    return runner;
});

