/*
 * LiskHQ/lisk-explorer
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
const config = require('./config.global');

/**
 * Frontend UI Message
 */
config.uiMessage.text = process.env.UI_MESSAGE || '';
config.uiMessage.start = process.env.UI_MESSAGE_START || ''; // optional, ISO Date-Time ex. '2018-07-11T15:01:00+02:00'
config.uiMessage.end = process.env.UI_MESSAGE_END || ''; // optional, ISO Date-Time ex. '2018-07-11T15:01:00+02:00'

/**
 * CONFIGURATION
 */
config.host = '0.0.0.0'; // Interface to listen on, 0.0.0.0 to listen on all available
config.port = 443; // Port to listen on

/**
 * LISK node
 */
config.lisk.host = process.env.LISK_HOST || 'mainnet.leasehold.io';
config.lisk.port = process.env.LISK_PORT || 443;
config.lisk.http = process.env.LISK_HTTP || 'https';
config.lisk.apiPath = '/api';

/**
 * FreeGeoIP server
 */
config.freegeoip.host = process.env.FREEGEOIP_HOST || 'api.ipstack.com';
config.freegeoip.port = process.env.FREEGEOIP_PORT || 80;
config.freegeoip.apikey = process.env.IPSTACK_APIKEY || 'aeb5be730f0da432c1f2e8dd440229d9';


/**
 * Redis server
 */
config.redis.host = process.env.REDIS_HOST || '127.0.0.1';
config.redis.port = process.env.REDIS_PORT || 6379;
config.redis.db = process.env.REDIS_DB || 0;
config.redis.password = '';

// Time in seconds to store cache in Redis
config.cacheTTL = 20;

// Collect logs (true - enabled, false - disabled)
config.log.enabled = true;
// Output for logs - can be device file or ordinary path
config.log.output = ['./logs/explorer.log'];
// Log level - (trace, debug, info, warn, error)
config.log.level = 'info';

/**
 * Header price tickers, Currency switcher
 */
// Exchange rates support (true - enabled, false - disabled)
config.exchangeRates.enabled = false;
// Interval in ms for checking exchange rates (default: 30 seconds)
config.exchangeRates.updateInterval = 30000;

// Configuration for different currency pairs, set false to disable pair
// LSK/BTC pair, supported: poloniex
config.exchangeRates.exchanges.LSK.BTC = 'poloniex';
// BTC/USD pair, supported: bitfinex, bitstamp, btce
config.exchangeRates.exchanges.BTC.USD = 'bitfinex';
// BTC/EUR pair, supported: bitstamp, bitmarket
config.exchangeRates.exchanges.BTC.EUR = 'bitstamp';
// BTC/RUB pair, supported: btce, exmo
config.exchangeRates.exchanges.BTC.RUB = 'btce';
// BTC/PLN pair, supported: bitmarket, bitbay
config.exchangeRates.exchanges.BTC.PLN = 'bitmarket';
// BTC/JPY pair, supported: coincheck
config.exchangeRates.exchanges.BTC.JPY = 'coincheck';
// BTC/GBP pair, supported: coinbase
config.exchangeRates.exchanges.BTC.GBP = 'coinbase';
// BTC/CNY pair, supported: 1btcxe, coinmarketcap
config.exchangeRates.exchanges.BTC.CNY = '1btcxe';

/**
 * Market watcher
 */
// Market watcher support (true - enabled, false - disabled)
config.marketWatcher.enabled = false;
// Poloniex exchange support (true - enabled, false - disabled)
config.marketWatcher.exchanges.poloniex = false;
// Bittrex exchange support (true - enabled, false - disabled);
config.marketWatcher.exchanges.bittrex = false;
// Interval in ms for updating candlestick data (default: 30 seconds)
config.marketWatcher.candles.updateInterval = 30000;
// Build candles based on trades form last 30 days
config.marketWatcher.candles.poloniex.buildTimeframe = 60 * 60 * 24 * 30;
// Interval in ms for updating order book data (default: 15 seconds)
config.marketWatcher.orders.updateInterval = 15000;

/**
 * Cache delegate info in order to replace address by username
 */
// Delegate caching support (true - enabled, false - disabled)
config.cacheDelegateAddress.enabled = true;
// Interval in ms for checking new delegates registration (default: 60 seconds)
config.cacheDelegateAddress.updateInterval = 60000;

/*
 * Known accounts can be loaded from the url below
 */
config.knownAccountsUrl = 'https://static-data.lisk.io';

module.exports = config;
