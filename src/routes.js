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
        path: '/basic/phase',
        component: lazy(() => import('./views/ui-elements/phase/pages/Home'))
      },
      {
        exact: true,
        path: '/basic/category',
        component: lazy(() => import('./views/ui-elements/category/Category'))
      },
      {
        path:"/phase/:id" ,
        exact: true, 
        component: lazy(() => import('./views/ui-elements/phase/pages/user/Users'))
      }
      ,
      {
        exact: true,
        path: '/basic/complaintType',
        component: lazy(() => import('./views/ui-elements/complaintType/ComplaintType'))
      },
      {
        exact: true,
        path: '/basic/post',
        component: lazy(() => import('./views/ui-elements/post/Post'))
      },
      {
        exact: true,
        path: '/basic/officer',
        component: lazy(() => import('./views/ui-elements/officer/Officer'))
      },
      {
        exact: true,
        path: '/basic/user',
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
        path: '/app/phaseTableHome',
        component: lazy(() => import('./views/ui-elements/phase/pages/Home'))
      },
      {
        exact: true,
        path: '/app/report',
        component: lazy(() => import('./views/report/Report'))
      },
      {
        exact: true,
        path: '/basic/phase',
        component: lazy(() => import('./views/ui-elements/phase/Phase'))
      },
      {
        exact: true,
        path: '/basic/category',
        component: lazy(() => import('./views/ui-elements/category/Category'))
      },
      {
        exact: true,
        path: '/basic/complaintType',
        component: lazy(() => import('./views/ui-elements/complaintType/ComplaintType'))
      },
      {
        exact: true,
        path: '/basic/post',
        component: lazy(() => import('./views/ui-elements/post/Post'))
      },
      {
        exact: true,
        path: '/basic/officer',
        component: lazy(() => import('./views/ui-elements/officer/Officer'))
      },
      {
        exact: true,
        path: '/basic/user',
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
