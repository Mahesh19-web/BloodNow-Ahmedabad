# BloodNow Ahmedabad

A mobile-friendly, multilingual front-end prototype for emergency blood requests and donor discovery around Ahmedabad. It supports English, Hindi, and Gujarati, all eight common blood groups, area filters, optional GPS distance filtering, urgent request prioritization, and direct phone links.

## Run locally

No build step or dependencies are required. Open `index.html` in a browser, or serve this directory over HTTP:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Browser geolocation generally requires HTTPS or localhost.

## Deploy

This is a static site: publish `index.html`, `app.js`, and `style.css` from the repository root using GitHub Pages or another static web host. On GitHub, go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. Wait for the Pages deployment workflow to finish; the published URL will appear in that settings page.

## Version 1 features

- Emergency blood request form with contact, hospital/location, blood group, units, area, optional details, and urgent flag.
- Donor registration with availability status and optional, explicit GPS sharing.
- Donor search by blood group and Ahmedabad area; distance filters (5/10/25/50 km) use browser geolocation and the Haversine formula for donors who opted in.
- Urgent requests appear first; requester and donor phone links use `tel:`.
- English, Hindi, and Gujarati interface; responsive mobile layout.

## Important prototype limitations

All donor and request records are stored in the browser's `localStorage` and are visible only in that browser on that device. This version has no server, shared donor directory, SMS/push notifications, authentication, or data moderation. Publishing it makes the interface public but **does not** make locally stored records available to other users. Do not enter real personal or medical information into a public demo. A real community service needs a secure backend, consent/privacy controls, access controls, abuse reporting, and clinical oversight. Blood eligibility and compatibility must be confirmed by qualified medical professionals; this app is not a blood bank or emergency service.
