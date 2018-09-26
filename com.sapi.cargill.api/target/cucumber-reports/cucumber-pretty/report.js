$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test the API",
  "description": "",
  "id": "title-of-your-feature;test-the-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Hit the url \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"\u003cresponseTag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"\u003cresponseTag\u003e\" value",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;test-the-api;",
  "rows": [
    {
      "cells": [
        "URL",
        "responseTag"
      ],
      "line": 11,
      "id": "title-of-your-feature;test-the-api;;1"
    },
    {
      "comments": [
        {
          "line": 12,
          "value": "#    | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractRefData?userId\u003d12 | data\u003ecommodity\u003ethirdPartyId,data\u003ecakTerm\u003estatus,data\u003ediscountScheduleTiming\u003ename |"
        }
      ],
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids",
        "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city"
      ],
      "line": 13,
      "id": "title-of-your-feature;test-the-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#    | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractRefData?userId\u003d12 | data\u003ecommodity\u003ethirdPartyId,data\u003ecakTerm\u003estatus,data\u003ediscountScheduleTiming\u003ename |"
    }
  ],
  "line": 13,
  "name": "Test the API",
  "description": "",
  "id": "title-of-your-feature;test-the-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 8549995908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 2623443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "duration": 2002127,
  "status": "passed"
});
});