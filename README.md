# Melvin Heng — Personal Consultancy Site

A single-page site with four sections (Home, About, Services, Contact) built as plain HTML/CSS/JS — no build tools needed, so it drops straight onto GitHub Pages.

## Files
- `index.html` — all four sections, linked by anchor nav (`#home`, `#about`, `#services`, `#contact`)
- `style.css` — navy/gold theme matching your Figma mockup
- `script.js` — mobile nav toggle + contact form handling
- `assets/` — put your headshot here (see below)

## 1. Add your photo
Drop a photo into `assets/` named `melvin-heng.jpg`, then in `index.html` replace:
```html
<div class="photo-placeholder">
  <span>MH</span>
  <small>Replace with headshot<br>assets/melvin-heng.jpg</small>
</div>
```
with:
```html
<img src="assets/melvin-heng.jpg" alt="Melvin Heng">
```

## 2. Connect the contact form (2 minutes, free)
The form currently only shows a demo message. To actually receive enquiries:
1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form, copy your endpoint (looks like `https://formspree.io/f/abc123`).
3. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/abc123" method="POST">
   ```
4. Remove the `e.preventDefault()` line in `script.js` (or delete the whole submit handler) so the browser submits to Formspree directly.

Formspree's free tier delivers submissions straight to your email — no direct phone/email needs to be published on the page.

## 3. Deploy to GitHub Pages (free)
1. Create a new GitHub repository, e.g. `melvin-heng-site`.
2. Upload these files (`index.html`, `style.css`, `script.js`, `assets/`) to the repo root — either via the GitHub web UI ("Add file → Upload files") or:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/melvin-heng-site.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a live URL within a minute or two, typically:
   `https://<your-username>.github.io/melvin-heng-site/`

That's your live site link to share. 

## Notes
- All four "pages" are sections on one scrolling page with anchor navigation (Home / About / Services / Contact), matching the structure of your original Figma mockup.
- Colours, type, and layout follow the same navy (#0A1424) + gold (#C9A24B) system as the mockup, using Playfair Display for headlines and Inter for body text.
- No personal phone/email is printed on the page — only a contact form and your general location, per your preference for a safer public deployment.
