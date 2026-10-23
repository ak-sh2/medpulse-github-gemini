# MedPulse — Safe Medication & Hydration Timer Studio

A single-file, zero-dependency browser web app for managing safe medication intervals, 30–45 minute hydration loops, reference-time relative reminders, and automatic + manual clinical timing logs.

## Features
- **Adjustable Medication Safety Timer:** Default 6-hour safety window with quick presets (`4h`, `6h`, `8h`, `12h`, `24h`), custom `HH:MM:SS` configuration, live `±5m / ±15m / ±30m` adjustments, and an Early-Dose Safety Confirmation Modal.
- **30–45 Minute Hydration Loop:** Quick band presets (`20m`, `30m`, `35m`, `40m`, `45m`), custom minutes/seconds, custom water sip volume in `ml` (`5 ml`–`3000 ml`), and optional auto-repeat cycling.
- **Reference-Time Relative Reminder Engine:** Anchor to the current time, a logged dose, or any custom timestamp and schedule relative offset reminders (`Hours`, `Minutes`, `Seconds`).
- **Multi-Modal Browser Reminders:** Native Browser Notifications, center-screen reminder pop-up modal, top alert banner, synthesized Web Audio API chime, `+5 Min` snooze, and flashing tab title alerts.
- **Automatic + Manual Timing Logbook:** Automatically records all timer starts, intakes, reference anchors, and fired reminders, alongside a manual retroactive entry logger and CSV / Inline Report / Print-to-PDF export.
- **Dark & Light Mode:** One-click theme toggle persisted in `localStorage`.

## Quick Deployment to GitHub Pages
1. Create a new repository on [GitHub](https://github.com/new).
2. Upload `index.html`, `README.md`, and `.gitignore` (or push this pre-initialized Git repository from your terminal):
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings -> Pages**.
4. Under **Build and deployment -> Branch**, select **`main`** and folder **`/ (root)`**, then click **Save**.
5. Wait ~60 seconds and open your live app at:
   `https://<your-username>.github.io/<your-repo>/`
