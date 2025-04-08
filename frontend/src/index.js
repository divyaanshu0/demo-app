import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { datadogRum } from '@datadog/browser-rum';

// ✅ Initialize Datadog RUM
datadogRum.init({
  applicationId: '7bad7366-8140-427b-bf2c-35f38e4ea476',
  clientToken: 'pubbe7686794f4e5565778a8a1b1bbcb9b3',
  site: 'us5.datadoghq.com',
  service: 'demo-app',
  env: 'production', // or staging, dev, etc.
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  defaultPrivacyLevel: 'mask-user-input',
});

// ✅ Optional: start session replay
datadogRum.startSessionReplayRecording();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
