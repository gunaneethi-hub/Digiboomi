# DigiBoomi - Deployment Guide for GitHub + Vercel

## 📋 Pre-Deployment Checklist

Before deploying, make sure to update these values in `/components/SEO.tsx`:

- [ ] Replace `https://www.digiboomi.com` with your actual domain
- [ ] Update email from `hello@digiboomi.com` to your real email
- [ ] Update social media handles (Twitter: `@digiboomi`, Instagram, LinkedIn URLs)
- [ ] Create and add OG image (1200x630px) and update path

## 🚀 Step 1: Push to GitHub

### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit - DigiBoomi website"
```

### Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `digiboomi-website`
3. Don't initialize with README (you already have files)

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/digiboomi-website.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy on Vercel

### Method 1: Vercel Dashboard (Recommended for First Time)

1. **Go to [Vercel](https://vercel.com) and sign up/login**
   - Use your GitHub account for seamless integration

2. **Import Your Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your `digiboomi-website` repository
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Auto-detected (likely Vite or Create React App)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` or `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed for Google Apps Script)
   - Add any environment variables your contact form needs
   - Example: `VITE_GOOGLE_SCRIPT_URL=your_url_here`

5. **Deploy**
   - Click "Deploy"
   - Wait 1-3 minutes for build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Vercel CLI (Advanced)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to Production
vercel --prod
```

## 🔧 Step 3: Configure Custom Domain (Optional but Recommended)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add your custom domain (e.g., `digiboomi.com`)

2. **Update DNS Records** (at your domain registrar):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update SEO.tsx**:
   - Change all URLs from `https://www.digiboomi.com` to your actual domain
   - Commit and push changes

## 📊 Step 4: Submit to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (Vercel makes this easy with DNS verification)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for your homepage

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## 🎯 Step 5: SEO Optimizations After Deployment

### 1. Update All URLs in SEO Component
```tsx
// In /components/SEO.tsx
canonical = 'https://YOURDOMAIN.com'  // ← Update this
```

### 2. Create OG Image
- Design a 1200x630px image with DigiBoomi branding
- Save as `/public/og-image.jpg`
- This appears when sharing on social media

### 3. Update Sitemap
- After deployment, update `/public/sitemap.xml`
- Replace all instances of `digiboomi.com` with your actual domain
- Update the `<lastmod>` dates when you make changes

### 4. Update Robots.txt
- Update sitemap URL in `/public/robots.txt` to your domain

### 5. Google Apps Script URL
- Make sure your Google Apps Script URL is updated in the contact form
- Test the form after deployment to ensure submissions work

## 🔍 Step 6: Verify SEO Setup

### Check Meta Tags
1. Visit your deployed site
2. Right-click → "View Page Source"
3. Verify meta tags are present in the `<head>`

### Test with SEO Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **SEO Site Checkup**: https://seositecheckup.com/

### Test Mobile Responsiveness
- **Google Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## 🚨 Important Notes

### Client-Side Rendering Limitation
This is a React SPA (Single Page Application), which means:
- ✅ Modern crawlers (Google, Bing) can render JavaScript and index your content
- ⚠️ Older crawlers may have issues
- ✅ Vercel automatically optimizes for crawlers

### Future Enhancement: Consider Next.js
For even better SEO, consider migrating to Next.js in the future:
- Server-Side Rendering (SSR)
- Better initial page load
- Improved SEO for all crawlers
- Vercel is built by the Next.js team

## 📈 Monitoring & Analytics

### Add Google Analytics (Recommended)
1. Create a Google Analytics 4 property
2. Add tracking code to your app
3. Monitor traffic and user behavior

### Add Google Tag Manager (Optional)
For advanced tracking and marketing pixels

## 🔄 Continuous Deployment

Every time you push to GitHub:
1. Vercel automatically detects changes
2. Builds your project
3. Deploys to production (main branch) or preview (other branches)

```bash
# Make changes locally
git add .
git commit -m "Update services section"
git push origin main

# Vercel automatically deploys!
```

## 📞 Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: Create issues in your repository

## ✅ Post-Deployment Checklist

After deployment, verify:
- [ ] Site loads correctly on desktop and mobile
- [ ] All sections are visible and functional
- [ ] Contact form submits to Google Sheets
- [ ] Meta tags are visible in page source
- [ ] OG image shows when sharing on social media
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Custom domain is connected (if applicable)
- [ ] SSL certificate is active (should be automatic on Vercel)
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools

---

## 🎉 Your Site is Live!

Once deployed, your DigiBoomi website will be:
- ✅ Live and accessible worldwide
- ✅ Automatically optimized by Vercel CDN
- ✅ Ready for search engine indexing
- ✅ Continuously deployed with every GitHub push

**Good luck with your digital marketing agency! 🚀**
