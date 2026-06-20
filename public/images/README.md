# Cutler image assets

Harvested Cutler-owned/source-reference images are stored in `public/images/cutler-source/` and have been normalized to clean kebab-case filenames.

Production pages must use these local copies, for example `/images/cutler-source/commercial-mowing.jpg`. Do **not** hotlink images from the old Cutler website or any third-party site.

The prior website was used only as an asset/source reference. This project should keep the new premium, commercial-first direction and should not recreate the old site.

Future asset organization:

- Put future Facebook/social harvests in a separate folder such as `public/images/facebook-source/`.
- Put client uploads in a separate folder or storage provider path rather than mixing them with curated source assets.
- Public gallery images require owner approval before publishing.
- Keep duplicate or secondary images documented in the image manifest at `lib/cutlerImages.ts`.
