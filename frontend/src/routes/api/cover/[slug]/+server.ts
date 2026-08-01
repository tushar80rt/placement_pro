import { error } from '@sveltejs/kit';

const wikiMap: Record<string, string> = {
    google: 'Google',
    amazon: 'Amazon_(company)',
    microsoft: 'Microsoft',
    meta: 'Meta_Platforms',
    apple: 'Apple_Inc.',
    netflix: 'Netflix',
    uber: 'Uber',
    adobe: 'Adobe_Inc.',
    nvidia: 'Nvidia',
    salesforce: 'Salesforce',
    oracle: 'Oracle_Corporation',
    linkedin: 'LinkedIn',
    atlassian: 'Atlassian',
    stripe: 'Stripe_(company)',
    airbnb: 'Airbnb',
    databricks: 'Databricks',
    snowflake: 'Snowflake_Inc.',
    coinbase: 'Coinbase',
    bloomberg: 'Bloomberg_L.P.',
    intel: 'Intel',
    amd: 'Advanced_Micro_Devices',
    cisco: 'Cisco',
    qualcomm: 'Qualcomm',
    'goldman-sachs': 'Goldman_Sachs',
    'jp-morgan': 'JPMorgan_Chase',
    'morgan-stanley': 'Morgan_Stanley',
    'american-express': 'American_Express',
    visa: 'Visa_Inc.',
    mastercard: 'Mastercard',
    samsung: 'Samsung_Electronics',
    flipkart: 'Flipkart',
    phonepe: 'PhonePe',
    razorpay: 'Razorpay',
    meesho: 'Meesho',
    swiggy: 'Swiggy',
    zomato: 'Zomato',
    cred: 'CRED_(company)',
    groww: 'Groww',
    myntra: 'Myntra',
    ola: 'Ola_Cabs',
    zoho: 'Zoho_Corporation',
    freshworks: 'Freshworks',
    tcs: 'Tata_Consultancy_Services',
    infosys: 'Infosys',
    wipro: 'Wipro',
    accenture: 'Accenture',
    capgemini: 'Capgemini',
    cognizant: 'Cognizant',
    ibm: 'IBM',
    deloitte: 'Deloitte'
};

const DEFAULT_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop'; // Premium modern office

export async function GET({ params, fetch }: any) {
    const slug = params.slug;
    const wikiTitle = wikiMap[slug];

    let targetUrl = DEFAULT_BG;

    if (wikiTitle) {
        try {
            const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`);
            if (res.ok) {
                const data = await res.json();
                if (data.originalimage && data.originalimage.source) {
                    targetUrl = data.originalimage.source;
                } else if (data.thumbnail && data.thumbnail.source) {
                    targetUrl = data.thumbnail.source;
                }
            }
        } catch (e) {
            console.error('Wiki fetch error:', e);
        }
    }

    // Redirect to the resolved URL instead of proxying
    // Browsers don't block Wikipedia or Unsplash, so this is safe and much faster!
    return Response.redirect(targetUrl, 302);
}
