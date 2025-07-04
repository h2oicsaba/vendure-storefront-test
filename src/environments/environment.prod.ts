export const environment = {
    production: true,
    apiHost: 'https://readonlydemo.vendure.io',
    apiPort: 443,
    shopApiPath: 'shop-api',
    baseHref: '/',
    tokenMethod: 'cookie',
    channelToken: (typeof process !== 'undefined' && (process as any).env && (process as any).env.CHANNEL_TOKEN) || '',
};
