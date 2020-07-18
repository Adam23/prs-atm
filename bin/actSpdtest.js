'use strict';

global.chainConfig.speedTest = true;
global.chainConfig.debug = true;

const { sushitrain } = require('sushitrain');
const { helper } = require('../index');

const func = async (argv) => {
    console.log('Evaluate RPC API nodes:');
    await sushitrain.getRpcUrl();
    console.log('\nEvaluate Chain API nodes:');
    await helper.assembleChainApiUrl();
};

module.exports = {
    func,
    name: 'Evaluate the connection speed of server nodes',
    help: [
        '    > Example of evaluating all pre-configured nodes:',
        '    $ prs-atm spdtest',
        '',
        '    > Example of evaluating a designated node:',
        '    $ prs-atm spdtest \\',
        '              --rpcapi=http://51.68.201.144:8888 \\',
        '              --chainapi=https://prs-bp3.press.one',
    ],
};