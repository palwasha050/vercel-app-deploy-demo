import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
          />
        );
      })}
    </Switch>
  </Suspense>
);



const routes = [

  {
    exact: true,
    path: '/app/viewpage',
    component: lazy(() => import('./views/viewpage/Viewpage'))
  }
  ,
  {
    exact: true,
    path: '/auth/signin-1',
    component: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: true,
    path: '/auth/signup-1',
    component: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/app/dashboard/default',
        component: lazy(() => import('./views/dashboard/DashDefault'))
      },
      {
        exact: true,
        path: '/app/report',
        component: lazy(() => import('./views/report/Report'))
      },
      {
        exact: true,
        path: '/phase',
        component: lazy(() => import('./views/ui-elements/phase/Phase'))
      },
      {
        exact: true,
        path: '/sector',
        component: lazy(() => import('./views/ui-elements/sector/Sector'))
      },
      {
        exact: true,
        path: '/category',
        component: lazy(() => import('./views/ui-elements/category/Category'))
      },
      {
        exact: true,
        path: '/complaintType',
        component: lazy(() => import('./views/ui-elements/complaintType/ComplaintType'))
      },
      {
        exact: true,
        path: '/post',
        component: lazy(() => import('./views/ui-elements/post/Post'))
      },
      {
        exact: true,
        path: '/officer',
        component: lazy(() => import('./views/ui-elements/officer/Officer'))
      },
      {
        exact: true,
        path: '/user',
        component: lazy(() => import('./views/ui-elements/user/User'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL} />
      }
    ]
  }
  ,
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/app/report',
        component: lazy(() => import('./views/report/Report'))
      },
      {
        exact: true,
        path: '/phase',
        component: lazy(() => import('./views/ui-elements/phase/Phase'))
      },
      {
        exact: true,
        path: '/category',
        component: lazy(() => import('./views/ui-elements/category/Category'))
      },
      {
        exact: true,
        path: '/complaintType',
        component: lazy(() => import('./views/ui-elements/complaintType/ComplaintType'))
      },
      {
        exact: true,
        path: '/post',
        component: lazy(() => import('./views/ui-elements/post/Post'))
      },
      {
        exact: true,
        path: '/officer',
        component: lazy(() => import('./views/ui-elements/officer/Officer'))
      },
      {
        exact: true,
        path: '/user',
        component: lazy(() => import('./views/ui-elements/user/User'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL} />
      }
    ]
  }
];

export default routes;
