'use strict';

const { useDevConfig } = require('@nw55/eslint-config');
const buildConfig = require('./eslint-config');

module.exports = useDevConfig(buildConfig);
