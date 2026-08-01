import { error } from '@sveltejs/kit';

const domainMap: Record<string, string> = {
    google: 'google.com',
    amazon: 'amazon.com',
    microsoft: 'microsoft.com',
    meta: 'meta.com',
    apple: 'apple.com',
    netflix: 'netflix.com',
    uber: 'uber.com',
    adobe: 'adobe.com',
    nvidia: 'nvidia.com',
    salesforce: 'salesforce.com',
    oracle: 'oracle.com',
    linkedin: 'linkedin.com',
    atlassian: 'atlassian.com',
    stripe: 'stripe.com',
    airbnb: 'airbnb.com',
    databricks: 'databricks.com',
    snowflake: 'snowflake.com',
    coinbase: 'coinbase.com',
    bloomberg: 'bloomberg.com',
    intel: 'intel.com',
    amd: 'amd.com',
    cisco: 'cisco.com',
    qualcomm: 'qualcomm.com',
    'goldman-sachs': 'goldmansachs.com',
    'jp-morgan': 'jpmorganchase.com',
    'morgan-stanley': 'morganstanley.com',
    'american-express': 'americanexpress.com',
    visa: 'visa.com',
    mastercard: 'mastercard.com',
    samsung: 'samsung.com',
    flipkart: 'flipkart.com',
    phonepe: 'phonepe.com',
    razorpay: 'razorpay.com',
    meesho: 'meesho.com',
    swiggy: 'swiggy.com',
    zomato: 'zomato.com',
    cred: 'cred.club',
    groww: 'groww.in',
    myntra: 'myntra.com',
    ola: 'olacabs.com',
    zoho: 'zoho.com',
    freshworks: 'freshworks.com',
    tcs: 'tcs.com',
    infosys: 'infosys.com',
    wipro: 'wipro.com',
    accenture: 'accenture.com',
    capgemini: 'capgemini.com',
    cognizant: 'cognizant.com',
    ibm: 'ibm.com',
    deloitte: 'deloitte.com'
};

export async function GET({ params, fetch }: any) {
    const slug = params.slug;
    const domain = domainMap[slug];
    
    if (domain) {
        try {
            const res = await fetch(`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            if (res.ok) {
                const buffer = await res.arrayBuffer();
                return new Response(buffer, {
                    headers: {
                        'Content-Type': res.headers.get('content-type') || 'image/png',
                        // 7 days browser cache, 1 year CDN, stale-while-revalidate for instant response
                        'Cache-Control': 'public, max-age=604800, s-maxage=31536000, stale-while-revalidate=86400'
                    }
                });
            }
        } catch (e) {
            console.error('Logo fetch error:', e);
        }
    }

    // Fallback Generation
    const initial = slug.charAt(0).toUpperCase();
    const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><rect width="100" height="100" rx="20" fill="#17202b"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="45" font-weight="bold">${initial}</text></svg>`;
    
    return new Response(fallbackSvg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=2592000, s-maxage=31536000, stale-while-revalidate=86400'
        }
    });
}
