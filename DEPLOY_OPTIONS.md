# Deployment Options for Eleventh House Landing Page

Your landing page is production-ready! Here are your deployment options:

## ⚡ Option 1: Vercel (Recommended - Easiest)

Vercel is made by the Next.js team and provides the best deployment experience.

### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Once logged in, click "Add New..." → "Project"
4. Import your repository: **landingPageVidBg**
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes at: `https://your-project.vercel.app`

### Custom Domain (Optional):
- In Vercel dashboard → Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

**Cost**: FREE for personal projects

---

## 🚀 Option 2: AWS Amplify via Console

Since CLI access is limited, use the AWS Console:

### Step 1: Access AWS Amplify Console
1. Open your web browser
2. Go to: https://console.aws.amazon.com/amplify
3. **Important**: Ensure you're in region **us-east-1** (top right corner)
4. If you can't see Amplify, contact your AWS administrator to add permissions

### Step 2: Create New App
1. Click the orange **"Create new app"** button (or "Host web app")
2. Select **"GitHub"** as the source
3. Click **"Continue"**

### Step 3: Authorize GitHub
1. Click **"Authorize AWS Amplify"**
2. Confirm the authorization in GitHub
3. You'll be redirected back to AWS

### Step 4: Select Repository
1. From the dropdown, select: **landingPageVidBg**
2. Branch: **main**
3. Click **"Next"**

### Step 5: Build Settings (Auto-detected)
AWS will automatically detect your `amplify.yml` file. You should see:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

Click **"Next"**

### Step 6: Review and Deploy
1. Review all settings
2. Click **"Save and deploy"**
3. Wait 3-5 minutes for deployment

### Your Live URL:
After deployment completes, you'll get a URL like:
```
https://main.d1234abcd5678.amplifyapp.com
```

### Troubleshooting AWS Amplify
If you can't see the Amplify service in your console, you need to add these IAM permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "amplify:*"
      ],
      "Resource": "*"
    }
  ]
}
```

Contact your AWS administrator to add this policy to your IAM user.

---

## 🌐 Option 3: Netlify

Another excellent alternative with great Next.js support.

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select **landingPageVidBg**
5. Netlify will auto-detect Next.js
6. Click "Deploy"

**Cost**: FREE for personal projects

---

## 📦 Option 4: Export Static and Deploy Anywhere

If you want to deploy to any static hosting (S3, GitHub Pages, etc.):

### Steps:
1. Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};
```

2. Build:
```bash
npm run build
```

3. The `out/` directory contains your static site

4. Upload `out/` directory to any static host:
   - AWS S3
   - GitHub Pages
   - Cloudflare Pages
   - Any web server

**Note**: Video autoplay might need server-side support

---

## 🎯 Recommended Choice

**For fastest deployment**: Use **Vercel** (Option 1)
- Created by Next.js team
- Best performance and features
- Automatic deployments from GitHub
- Free SSL certificate
- Global CDN

**For AWS ecosystem**: Use **AWS Amplify** (Option 2)
- But you'll need IAM permissions first
- Better integration with other AWS services

---

## Post-Deployment Checklist

After deploying to any platform:

- [ ] Test the live URL
- [ ] Verify video plays correctly
- [ ] Check logos display properly
- [ ] Test header navigation links
- [ ] Verify responsive design on mobile
- [ ] Test all CTA buttons
- [ ] Check page load speed
- [ ] Set up custom domain (optional)

---

## Custom Domain Setup

### Vercel:
1. Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Site Settings → Domain management
2. Add custom domain
3. Follow DNS configuration

### AWS Amplify:
1. App Settings → Domain management
2. Add domain
3. AWS handles SSL automatically

---

## Need Help?

- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **AWS Amplify**: https://docs.aws.amazon.com/amplify/

Your landing page is ready to go live! 🚀
