const fs = require('fs');
const path = require('path');

// 1. Devices
const devicesContent = fs.readFileSync('lib/devices.ts', 'utf-8');
const devices = [...devicesContent.matchAll(/slug:\s*\"([^\"]+)\"/g)].map(m => m[1]);

// 2. Apps
const appsContent = fs.readFileSync('lib/applications.ts', 'utf-8');
const apps = [...appsContent.matchAll(/slug:\s*\"([^\"]+)\"/g)].map(m => m[1]);

// 3. Problems
const probContent = fs.readFileSync('lib/problemes.ts', 'utf-8');
const problems = [...probContent.matchAll(/slug:\s*\"([^\"]+)\"/g)].map(m => m[1]);

// 4. Comparatifs
const compContent = fs.readFileSync('lib/comparatifs.ts', 'utf-8');
const comparatifs = [...compContent.matchAll(/slug:\s*\"([^\"]+)\"/g)].map(m => m[1]);

// 5. Blog Posts
const blogContent = fs.readFileSync('lib/blog.ts', 'utf-8');
const blogPosts = [...blogContent.matchAll(/slug:\s*\"([^\"]+)\"/g)].map(m => m[1]);

// 6. Find all static page.tsx files in app
function getStaticPages(dir, base = '') {
  let list = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!item.startsWith('[') && !item.startsWith('(')) {
        list = list.concat(getStaticPages(full, base + '/' + item));
      }
    } else if (item === 'page.tsx') {
      list.push(base === '' ? '/' : base);
    }
  }
  return list;
}

const staticRoutes = getStaticPages('app');

console.log('=== BREAKDOWN OF WEBSITE ROUTES & PAGES ===');
console.log('1. Static Core Pages:', staticRoutes.length);
console.log('2. Device Guide Pages (/appareils/[device]):', devices.length);
console.log('3. Application Guide Pages (/applications/[app]):', apps.length);
console.log('4. Troubleshooting Hub Pages (/problemes/[slug]):', problems.length);
console.log('5. Comparison Pages (/comparatifs/[slug]):', comparatifs.length);
console.log('6. Blog & Pillar Guides (/blog/[slug]):', blogPosts.length);

const total = staticRoutes.length + devices.length + apps.length + problems.length + comparatifs.length + blogPosts.length;
console.log('\n>>> TOTAL INDEXABLE & ACCESSIBLE PAGES:', total);

console.log('\nStatic Routes List:');
console.log(staticRoutes);
