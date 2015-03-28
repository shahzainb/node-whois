exports.api = {
	name: 'WhoIs App',
	version: '0.0.1'
};

exports.environment = {
	name: 'development',
	port: 3030
};

exports.limiter = {
	defaultBurstRate: 50,
	defaultRatePerSec: 0.5
};