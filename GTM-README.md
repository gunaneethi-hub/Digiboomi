Google Tag Manager (GTM) — Quick Setup & Test
==============================================

Purpose
-------
This file explains how to add Google Analytics (GA4) via Google Tag Manager (GTM), how we temporarily disabled the inline `gtag` page_view to avoid duplicate hits during testing, and how to test & finalize the setup.

Files changed
-------------
- `index.html` (root): GTM head script added and GTM noscript iframe added after `<body>`.
- `src/index.html`: same GTM changes for dev/local usage.
- The inline GA4 script was temporarily changed to disable auto page_view:
  - `gtag('config', 'G-93W7SS59D2', { 'send_page_view': false });`

Goal
----
- Use GTM as the single place to manage tags (GA4, conversions, third-party tags).
- Avoid duplicate `page_view` events while testing (hence `send_page_view:false`).

Step 1 — Add GA4 to GTM (Recommended)
------------------------------------
1. Open Google Tag Manager (https://tagmanager.google.com) and select the container `GTM-MRWR6Z3Z`.
2. Workspace -> Tags -> New -> Tag Configuration -> Google Analytics: GA4 Configuration.
3. Enter Measurement ID: `G-93W7SS59D2`.
4. Triggering -> All Pages.
5. Save the tag.

Step 2 — Test in GTM Preview Mode
---------------------------------
1. In GTM UI click "Preview".
2. Enter your site URL (https://www.digiboomi.com) and start the preview session.
3. A Tag Assistant window should open; navigate your site and watch which tags fire.
4. Confirm the GA4 Configuration tag fires on All Pages.

Step 3 — Verify in Google Analytics
----------------------------------
1. Open GA4 → Realtime or DebugView.
2. Visit the site (with GTM Preview open) and check for the `page_view` event.
3. If the `page_view` event appears once, you are good. If it appears twice, you still have duplication.

How we prevent duplicates while testing
--------------------------------------
- We set the inline gtag to not send an automatic page_view:
  ```html
  gtag('config', 'G-93W7SS59D2', { 'send_page_view': false });
  ```
- This allows GTM to send the `page_view` via the GA4 Configuration tag (so it fires only once).

Finalizing (after successful testing)
-------------------------------------
Option A (recommended):
- Remove the inline `gtag` snippet completely from both `index.html` and `src/index.html`.
- Publish the GTM container (submit & publish) so GA4 is live via GTM.

Option B (alternative):
- Keep inline `gtag` but leave `send_page_view:false` and manage page_views/events from GTM. (Less clean but works.)

How to remove inline gtag (if you want me to do it):
- Delete these lines from both `index.html` and `src/index.html`:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-93W7SS59D2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', 'G-93W7SS59D2', { 'send_page_view': false });
  </script>
  ```
- Commit and push; GTM will handle GA4 after you publish the container.

Debugging tips
--------------
- Use the browser DevTools → Network filter for `collect` or `g/collect` to see GA4 requests.
- In GTM Preview, check the "Summary" and "Tags Fired" panels.
- Temporarily publish in GTM only after you are sure tags are firing as desired.

Consent / Privacy
-----------------
- If you require user consent (GDPR/CCPA), initialize GTM only after consent or block tags until consent is granted.
- You can initialize GTM from React after consent using `react-gtm-module` (see below).

Optional: Initialize GTM in code (deferred or consented load)
-----------------------------------------------------------
Install:
```bash
npm install react-gtm-module
```
Initialize (e.g., in `src/main.tsx` after consent):
```ts
import TagManager from 'react-gtm-module';

TagManager.initialize({ gtmId: 'GTM-MRWR6Z3Z' });
```

Notes
-----
- GTM Preview is the safest way to test before publishing.
- After publishing, monitor GA Realtime and Tag Assistant to ensure accurate data.

If you want, I can:
- Remove the inline gtag for you and push that change.
- Add a small `GTM_TEST.md` with steps you can follow interactively.

Last updated: 2025-12-24
