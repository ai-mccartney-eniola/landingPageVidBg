# AWS Amplify Deployment Guide

## Project Ready for Deployment ✅

Your landing page has been successfully built and pushed to GitHub!

- **Repository**: https://github.com/ai-mccartney-eniola/landingPageVidBg
- **Branch**: main
- **Build Status**: ✅ Successful

## Option 1: Deploy via AWS Console (Recommended)

Since the IAM user lacks Amplify CLI permissions, follow these steps to deploy via the AWS Console:

### Step 1: Access AWS Amplify Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Select region: **us-east-1** (or your preferred region)
3. Click **"New app"** → **"Host web app"**

### Step 2: Connect GitHub Repository
1. Select **GitHub** as the source
2. Click **"Connect branch"**
3. Authorize AWS Amplify to access your GitHub account
4. Select repository: **landingPageVidBg**
5. Select branch: **main**

### Step 3: Configure Build Settings
AWS Amplify will auto-detect Next.js. Verify these settings:

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
```

### Step 4: Configure Environment Variables (if needed)
Add these if you have specific environment requirements:
```
NEXT_PUBLIC_CLOUDFRONT_URL=<your-cloudfront-url>
NEXT_PUBLIC_S3_BUCKET=eleventh-house-landing-assets
NEXT_PUBLIC_AWS_REGION=us-east-1
```

### Step 5: Deploy
1. Review all settings
2. Click **"Save and deploy"**
3. Wait for deployment (usually 3-5 minutes)

### Step 6: Get Your URL
Once deployed, you'll receive:
- **Amplify URL**: `https://<app-id>.amplifyapp.com`
- **Custom domain** (optional): You can add your own domain later

## Option 2: Add IAM Permissions for CLI Deployment

If you prefer CLI deployment, ask your AWS administrator to add this policy to the IAM user:

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

Then run:
```bash
export AWS_PROFILE=eleventh-house
aws amplify create-app --name "eleventh-house-landing" \
  --repository "https://github.com/ai-mccartney-eniola/landingPageVidBg" \
  --platform WEB \
  --region us-east-1
```

## Post-Deployment Checklist

After deployment:
- ✅ Test the live URL
- ✅ Verify video plays correctly
- ✅ Check logos display properly
- ✅ Test header navigation
- ✅ Verify responsive design on mobile
- ✅ Configure custom domain (optional)
- ✅ Set up SSL certificate (automatic with Amplify)

## Continuous Deployment

AWS Amplify is now configured for automatic deployments:
- Every push to `main` branch triggers a new deployment
- Build and deploy automatically
- Previous versions are saved for rollback

## Custom Domain Setup (Optional)

1. In Amplify Console, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

## Troubleshooting

### Build Fails
- Check build logs in Amplify Console
- Verify all dependencies in `package.json`
- Ensure Node.js version compatibility

### Video Not Loading
- Check video file size (should be optimized)
- Verify video path in `VideoBackground.tsx`
- Consider using CloudFront for video delivery

### Images Not Displaying
- Verify all image paths in `public/` directory
- Check Next.js Image component configuration
- Enable image optimization in Amplify

## Support

For issues:
- AWS Amplify Docs: https://docs.aws.amazon.com/amplify/
- Next.js Deployment: https://nextjs.org/docs/deployment
