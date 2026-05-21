
# HCM Kendo Federation

## Running the app

### Prerequisites

- Node.js
- Yarn

### 1. Set up Google OAuth credentials

In [Google Cloud Console](https://console.cloud.google.com/):

- Create an OAuth 2.0 Client ID (Web application)
- Add authorized redirect URI: `http://localhost:3001/api/auth/google/callback`

### 2. Configure the server environment

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```
GOOGLE_CLIENT_ID=<from Google Cloud Console>
GOOGLE_CLIENT_SECRET=<from Google Cloud Console>
SESSION_SECRET=<any random string>
SEED_ADMIN_EMAIL=<your Google email — this becomes the first admin>
PORT=3001
NODE_ENV=development
```

### 3. Install dependencies

```bash
yarn                        # frontend deps
yarn --cwd server install   # backend deps
```

### 4. Start the development servers

```bash
yarn dev
```

This runs both concurrently:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`

---

## Admin dashboard

Navigate to `http://localhost:3000/admin/login` and sign in with the Google account matching `SEED_ADMIN_EMAIL`.

Additional admins can be added via `/admin/admins` once logged in — they are stored in `server/data/admins.json`.
