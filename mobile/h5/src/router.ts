import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/ExperimentList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'explist',
      },
    },
    {
      path: '/explist',
      name: 'explist',
      component: () => import(/* webpackChunkName: "explist" */ './views/ExperimentList.vue'),
    },
    {
      path: '/experiment/:expId',
      name: 'expdetails',
      component: () => import(/* webpackChunkName: "expdetails" */ './views/ExperimentDetails.vue'),
    },
    {
      path: '/webservice',
      name: 'webservice',
      component: () => import(/* webpackChunkName: "webservice" */ './views/Webservice.vue'),
    },
    {
      path: '/webservice/:id',
      name: 'webservicedetails',
      component: () => import(/* webpackChunkName: "webservicedetails" */ './views/WebserviceDetails.vue'),
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import(/* webpackChunkName: "notification" */ './views/Notification.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
    },
  ],
});
