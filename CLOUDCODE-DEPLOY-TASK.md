# Claude Code Deployment Task

This file is for server-side Claude Code sessions where long copy/paste does not work well over SSH.

## Goal

Deploy the Cutler Lawns Next.js app as a self-hosted production app for:

- cutlerlawns.com
- www.cutlerlawns.com

Use a normal Linux server deployment pattern:

- pull the latest `main` branch
- install Node dependencies
- build the Next.js app
- run the app with a process manager such as PM2
- proxy the domain through Nginx
- add SSL with Certbot only after DNS points to the server

## Important rules

- Do not use GitHub Pages.
- Do not use Vercel.
- Do not delete unrelated server apps.
- Do not delete unrelated Nginx configs.
- Do not expose `.env` or `.env.local`.
- Do not commit secrets.
- If port 3000 is busy, use another local app port and adjust Nginx.
- Stop and report if an existing service looks important.

## App notes

Expected public pages:

- `/`
- `/design`
- `/gallery`
- `/catalog`
- `/cart`
- `/estimate`
- `/reviews`

Expected API routes:

- `/api/design`
- `/api/design/chat`
- `/api/design/brief`
- `/api/design/generate`
- `/api/uploads`

## Server deployment checklist

1. Inspect the server operating system and installed versions of Node, npm, Nginx, and PM2.
2. Check whether ports 80, 443, 3000, and 3002 are already in use.
3. Confirm whether the app directory already exists under `/var/www/cutlerlawns.com`.
4. Clone the repo if missing, or pull latest `main` if already cloned.
5. Install dependencies with npm.
6. Build with `npm run build`.
7. Run the app with PM2 as process name `cutlerlawns`.
8. Configure Nginx to proxy `cutlerlawns.com` and `www.cutlerlawns.com` to the local Next.js app port.
9. Test Nginx before reloading it.
10. Add SSL with Certbot only if DNS points to the server.
11. Verify the public site and report the final status.

## Recommended deploy script

Create a server-local deploy script at `/var/www/cutlerlawns.com/deploy.sh` that:

1. enters `/var/www/cutlerlawns.com`
2. pulls latest `main`
3. installs dependencies
4. runs production build
5. restarts the `cutlerlawns` PM2 process

## Final report required

Report:

- app path
- app port
- PM2 status
- Nginx config path
- SSL status
- DNS status
- public URL status
- any errors
- next required step
