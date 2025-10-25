import axios from 'axios';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';

window.$ = window.jQuery = $;
window.Popper = Popper;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

const url = document.head.querySelector('meta[name="app-url"]');

if (url) {
  window.axios.defaults.baseURL = url.content;
  window.baseUrl = url.content;
} else {
  console.error('Please set the app URL as a meta tag');
}
