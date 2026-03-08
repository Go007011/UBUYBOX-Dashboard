# Deploy & Vercel Cache Control

## Build cache bypass
- **Project variable**: Vercel Dashboard → Project Settings → Environment Variables → add `VERCEL_FORCE_NO_BUILD_CACHE=1` for Production, Preview, and Development (when used). This forces Vercel to skip the stored build cache.
- **CI enforcement**: `.github/workflows/vercel-deploy.yml` exports `VERCEL_FORCE_NO_BUILD_CACHE=1` and uses `vercel deploy --force` so GitHub Actions deployments always run without cache.
- **Redeploy trigger**: Push to `main` or run the `Vercel Deploy (no cache)` workflow manually to produce a fresh production deployment.

## Cache troubleshooting
- **When to toggle off**: after stale assets/config show up in production or when Vercel support flags cache corruption.
- **How to revert**: remove the `VERCEL_FORCE_NO_BUILD_CACHE` entry in Vercel Dashboard (all environments) and, if desired, delete the workflow-level env var in `.github/workflows/vercel-deploy.yml`.
- **What to check in logs**: look for lines such as “Skipping build cache” or `VERCEL_FORCE_NO_BUILD_CACHE=1` in the Vercel deployment output to confirm caching is disabled.
