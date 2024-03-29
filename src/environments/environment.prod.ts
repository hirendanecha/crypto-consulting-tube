const url = 'https://api.cryptoconsulting.tube';
const webUrl = 'https://cryptoconsulting.tube/';
const tubeUrl = 'https://video.cryptoconsulting.tube/'

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: true,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.cryptoconsulting.tube'
};
