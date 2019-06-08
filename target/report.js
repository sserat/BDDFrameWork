$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.before({
  "duration": 4808031513,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5625256098,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1475511348,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_see_test_environment_page()"
});
formatter.result({
  "duration": 1357628669,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 5143301,
  "status": "passed"
});
formatter.after({
  "duration": 865067670,
  "status": "passed"
});
formatter.before({
  "duration": 3402432550,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5186797532,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 2172507776,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 225792433,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 633592283,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 718496050,
  "status": "passed"
});
formatter.after({
  "duration": 858597755,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 30,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "test001@test.com",
        "test001"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    },
    {
      "cells": [
        "test002@test.com",
        "test002"
      ],
      "line": 32,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;3"
    },
    {
      "cells": [
        "test003@test.com",
        "test003"
      ],
      "line": 33,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3502110021,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5809862226,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 5551185302,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test001@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 77555236,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 480475685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 744546379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2143238490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2149348900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 3055974232,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2686626865,
  "status": "passed"
});
formatter.after({
  "duration": 826892521,
  "status": "passed"
});
formatter.before({
  "duration": 3548158739,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5922951628,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 2158475602,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test002@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test002",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 109308667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 507937172,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 778011215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2130199497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2156117877,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 2638365411,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2650096750,
  "status": "passed"
});
formatter.after({
  "duration": 816057970,
  "status": "passed"
});
formatter.before({
  "duration": 3509644232,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5364943226,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1241454235,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test003@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test003",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 433971462,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 497376400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 662196287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2143837797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2139297360,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 3037929817,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2706253106,
  "status": "passed"
});
formatter.after({
  "duration": 804756457,
  "status": "passed"
});
});