import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  if (!mixpanel.__loaded) {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: true,
    });
  }
};

export const trackEvent = (event, props) => {
  mixpanel.track(event, props);
};

