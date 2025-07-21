// sentry.js
const Sentry = require('@sentry/node');
const express = require('express');

Sentry.init({
  dsn: 'YOUR_BACKEND_SENTRY_DSN', // Replace with your backend Sentry DSN
  tracesSampleRate: 1.0,
});

function useSentry(app) {
  app.use(Sentry.Handlers.requestHandler());

  // Optional route for testing
  app.get('/debug-sentry', function mainHandler(req, res) {
    throw new Error('Sentry error test!');
  });

  app.use(Sentry.Handlers.errorHandler());
}

module.exports = useSentry;
