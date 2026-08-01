import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const companies = ['Google','Amazon','Microsoft','Meta','Apple','Netflix','Uber','Adobe','NVIDIA','Salesforce','Oracle','LinkedIn','Atlassian','Stripe','Airbnb','Databricks','Snowflake','Coinbase','Bloomberg','Intel','AMD','Cisco','Qualcomm','Goldman Sachs','JP Morgan','Morgan Stanley','American Express','Visa','Mastercard','Samsung','Flipkart','PhonePe','Razorpay','Meesho','Swiggy','Zomato','CRED','Groww','Myntra','Ola','Zoho','Freshworks','TCS','Infosys','Wipro','Accenture','Capgemini','Cognizant','IBM','Deloitte'];

const outDir = path.join(__dirname, '../src/lib/assets/company-logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fetchImage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => resolve(body));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
         https.get(res.headers.location, (res2) => {
           if (res2.statusCode === 200) {
              let body = '';
              res2.on('data', chunk => body += chunk);
              res2.on('end', () => resolve(body));
           } else {
              reject(new Error('Failed redirect'));
           }
         }).on('error', reject);
      } else {
        reject(new Error(`Status: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const generateFallbackSVG = (name) => {
  const initial = name.charAt(0).toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="20" fill="#17202b" />
    <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="45" font-weight="bold">${initial}</text>
  </svg>`;
};

async function main() {
  const mappings = [];
  console.log('Downloading 50 company logos...');

  for (const name of companies) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const simpleIconSlug = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    let svgContent = '';
    
    try {
      svgContent = await fetchImage(`https://cdn.simpleicons.org/${simpleIconSlug}`);
    } catch (e1) {
      svgContent = generateFallbackSVG(name);
    }

    if (!svgContent || !svgContent.includes('<svg')) {
      svgContent = generateFallbackSVG(name);
    }

    const filename = `${slug}.svg`;
    fs.writeFileSync(path.join(outDir, filename), svgContent);
    mappings.push({ slug, filename, name });
    console.log(`Saved ${filename}`);
  }

  let tsContent = `// Automatically generated\n`;
  mappings.forEach(m => {
    const varName = m.slug.replace(/-/g, '_');
    tsContent += `import ${varName} from '$lib/assets/company-logos/${m.filename}?raw';\n`;
  });

  tsContent += `\nconst manualLogos: Record<string, string> = {\n`;
  mappings.forEach(m => {
    const varName = m.slug.replace(/-/g, '_');
    tsContent += `  '${m.slug}': ${varName},\n`;
  });
  tsContent += `};\n\n`;

  tsContent += `export const getLogo = (name: string, initial: string) => {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (manualLogos[id]) return manualLogos[id];
  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><rect width="100" height="100" rx="20" fill="#17202b"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="45" font-weight="bold">\${initial}</text></svg>\`;
};\n`;

  const catalogsPath = path.join(__dirname, '../src/lib/data/catalogs.ts');
  let catalogs = fs.readFileSync(catalogsPath, 'utf8');
  
  // Clean up old imports
  catalogs = catalogs.replace(/import .*?\.svg\?raw';\n/g, '');
  catalogs = catalogs.replace(/const manualLogos: Record.*?};\n/s, '');
  catalogs = catalogs.replace(/const getLogo = .*?};\n/s, '');
  catalogs = catalogs.replace(/export const getLogo = .*?};\n/s, '');

  catalogs = catalogs.replace('const companyNames = [', tsContent + '\nconst companyNames = [');

  fs.writeFileSync(catalogsPath, catalogs);
  console.log('✅ Done! All 50 SVGs downloaded and src/lib/data/catalogs.ts has been updated.');
}

main();
