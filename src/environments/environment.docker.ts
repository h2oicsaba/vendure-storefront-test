export const environment = {
    production: true,
    apiHost: 'http://localhost',
    apiPort: 3000,
    shopApiPath: 'shop-api',
    baseHref: '/',
    tokenMethod: 'bearer',
    channelToken: (typeof process !== 'undefined' && (process as any).env && (process as any).env.CHANNEL_TOKEN) || '',
};
