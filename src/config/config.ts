/* eslint-disable no-unused-vars */
import { IConfig } from 'src/interfaces/config';

const config = {
	all: {
		env: process.env.NODE_ENV || 'dev',
		port: process.env.PORT || 4300,
		proxyTimeout: 10000,
		timeExpireHelmet: 15778476000,
		puppeteerUrl: 'http://localhost:4200'
	},
	dev: {
		isDebug: true
	},
	qa: {
		isDebug: true,
	},
	prd: {
		isDebug: false,
		ip: process.env.HOSTNAME || '0.0.0.0',
		port: process.env.PORT || 8080,
	}
};

const getConfig = (): IConfig => {
    return { ...config.all,
        ...config[config.all.env]
    };
}

export default getConfig();
