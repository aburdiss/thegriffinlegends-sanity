import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'qqm8v4gw',
    dataset: 'production',
  },
  studioHost: 'thegriffinlegends',
  deployment: { autoUpdates: true, appId: 'ux011nutvonp95qmcepet563' },
});
