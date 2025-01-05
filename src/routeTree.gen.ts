/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const ShopLazyImport = createFileRoute('/shop')()
const RegisterLazyImport = createFileRoute('/register')()
const PlayLazyImport = createFileRoute('/play')()
const NewsLazyImport = createFileRoute('/news')()

// Create/Update Routes

const ShopLazyRoute = ShopLazyImport.update({
  id: '/shop',
  path: '/shop',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shop.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const PlayLazyRoute = PlayLazyImport.update({
  id: '/play',
  path: '/play',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/play.lazy').then((d) => d.Route))

const NewsLazyRoute = NewsLazyImport.update({
  id: '/news',
  path: '/news',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/news.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/news': {
      id: '/news'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsLazyImport
      parentRoute: typeof rootRoute
    }
    '/play': {
      id: '/play'
      path: '/play'
      fullPath: '/play'
      preLoaderRoute: typeof PlayLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/shop': {
      id: '/shop'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof ShopLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/news': typeof NewsLazyRoute
  '/play': typeof PlayLazyRoute
  '/register': typeof RegisterLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/news': typeof NewsLazyRoute
  '/play': typeof PlayLazyRoute
  '/register': typeof RegisterLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/news': typeof NewsLazyRoute
  '/play': typeof PlayLazyRoute
  '/register': typeof RegisterLazyRoute
  '/shop': typeof ShopLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/news' | '/play' | '/register' | '/shop'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/news' | '/play' | '/register' | '/shop'
  id: '__root__' | '/' | '/news' | '/play' | '/register' | '/shop'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NewsLazyRoute: typeof NewsLazyRoute
  PlayLazyRoute: typeof PlayLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  ShopLazyRoute: typeof ShopLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NewsLazyRoute: NewsLazyRoute,
  PlayLazyRoute: PlayLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  ShopLazyRoute: ShopLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/news",
        "/play",
        "/register",
        "/shop"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/news": {
      "filePath": "news.lazy.tsx"
    },
    "/play": {
      "filePath": "play.lazy.tsx"
    },
    "/register": {
      "filePath": "register.lazy.tsx"
    },
    "/shop": {
      "filePath": "shop.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
