# Deployment Instructions

## Enable GitHub Pages

To make the website live, you need to enable GitHub Pages in the repository settings:

1. Go to your repository on GitHub: https://github.com/nwabuezebenjamin12-jpg/debbykemmi.com
2. Click on **Settings** (in the repository menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The GitHub Actions workflow will automatically deploy the website
6. After a few minutes, your site will be available at: https://nwabuezebenjamin12-jpg.github.io/debbykemmi.com/

## Alternative: Manual GitHub Pages Setup

If you prefer to use the traditional GitHub Pages method:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select the branch with your website files (e.g., `copilot/deploy-website-online` or `main`)
   - **Folder**: Select `/ (root)`
3. Click **Save**
4. Wait a few minutes for the deployment
5. Your site will be available at: https://nwabuezebenjamin12-jpg.github.io/debbykemmi.com/

## Verification

Once deployed, visit your website at the URL above to ensure it's working correctly.

## Custom Domain (Optional)

If you want to use the custom domain `debbykemmi.com`:

1. Add a file named `CNAME` to the repository root with the content: `debbykemmi.com`
2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `nwabuezebenjamin12-jpg.github.io`
3. In GitHub Pages settings, add your custom domain: `debbykemmi.com`
4. Enable "Enforce HTTPS" for security

For detailed instructions, see: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
