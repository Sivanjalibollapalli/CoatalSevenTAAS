# Deploying Coastal Seven TaaS on Lightning AI

This guide will help you deploy the Coastal Seven Talent-as-a-Service (TaaS) web application on Lightning AI.

## Prerequisites

1. **Lightning AI Account**: Sign up at [lightning.ai](https://lightning.ai)
2. **Lightning CLI**: Install the Lightning CLI
   ```bash
   pip install lightning
   ```
3. **Git Repository**: Ensure your code is in a Git repository

## Deployment Steps

### 1. Install Lightning CLI (if not already installed)
```bash
pip install lightning
```

### 2. Login to Lightning AI
```bash
lightning login
```

### 3. Deploy the Application
From the project root directory, run:
```bash
lightning deploy app
```

### 4. Alternative: Deploy with Custom Name
```bash
lightning deploy app --name coastal-seven-taas
```

## Configuration Files

The deployment uses the following configuration files:

- `lightning.yaml`: Main deployment configuration
- `.lightningignore`: Files to exclude from deployment
- `public/_redirects`: Handles client-side routing

## Build Process

The deployment will:
1. Install Node.js dependencies (`npm install`)
2. Build the production bundle (`npm run build`)
3. Serve the built files using Vite's preview server

## Environment Variables

The following environment variables are set:
- `NODE_ENV=production`

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are properly listed in `package.json`
2. **Routing Issues**: Ensure `public/_redirects` file is present
3. **Port Conflicts**: The app uses port 4173 (Vite preview default)

### Logs and Debugging

To view deployment logs:
```bash
lightning logs <app-name>
```

## Post-Deployment

After successful deployment:
1. Your app will be available at the provided Lightning AI URL
2. You can share the URL with stakeholders
3. Monitor the app performance through Lightning AI dashboard

## Updating the Deployment

To update your deployed app:
1. Make your code changes
2. Commit and push to your repository
3. Run `lightning deploy app` again

## Support

For Lightning AI specific issues, refer to the [Lightning AI documentation](https://lightning.ai/docs). 