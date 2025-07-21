// src/sentry.jsx
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_FRONTEND_SENTRY_DSN', // Replace with your Sentry DSN
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
