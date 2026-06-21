# Claude Code DNS and SSL Follow-up Task

This task is for Claude Code running on the production server.

## Context

The Cutler Lawns app has already been deployed on the server.

The domain DNS was updated in GoDaddy to point the root domain to the production server IP.

Target domains:

- cutlerlawns.com
- www.cutlerlawns.com

Expected server IP:

- 172.234.25.199

## Goal

Watch DNS until both domains resolve to the production server, then complete SSL setup with Certbot and verify the site.

## Rules

- Do not run forever.
- Check every 2 minutes for up to 60 minutes.
- Only run Certbot after DNS resolves correctly.
- Do not delete unrelated Nginx configs.
- Do not touch unrelated apps.
- Update BUILD-STATUS.md when finished.

## Steps

1. Confirm the app is still running under PM2 as `cutlerlawns`.
2. Confirm Nginx config still passes.
3. Check DNS for both domains.
4. If both domains resolve to 172.234.25.199, run Certbot for both domains.
5. Reload Nginx only after config test passes.
6. Test HTTP and HTTPS for both domains.
7. Update BUILD-STATUS.md with final status.

## DNS check commands

Run these from the server:

```bash
dig +short cutlerlawns.com
dig +short www.cutlerlawns.com
```

Both should return:

```text
172.234.25.199
```

If `dig` is not installed, install dnsutils or use `getent hosts`.

## SSL command

Run this only after DNS points correctly:

```bash
sudo certbot --nginx -d cutlerlawns.com -d www.cutlerlawns.com
```

## Verification commands

```bash
pm2 status
sudo nginx -t
curl -I http://cutlerlawns.com
curl -I http://www.cutlerlawns.com
curl -I https://cutlerlawns.com
curl -I https://www.cutlerlawns.com
```

## BUILD-STATUS.md update

Append or update the report with:

- timestamp
- DNS result for both domains
- whether SSL was installed
- Certbot result
- Nginx test result
- PM2 status
- HTTP status
- HTTPS status
- any errors
- next required step
