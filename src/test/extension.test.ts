//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { isCGS } from '../utils';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    // Defines a Mocha unit test
    test("测试一个选择器是否是组合选择器", function() {
        assert(isCGS('.button.button_theme_islands')=== true)
        assert(isCGS('img + p') === true)
        assert(isCGS('p ~ span') === true)
        assert(isCGS('div > span') === true)
        assert(isCGS('div span') === true)
    });
});