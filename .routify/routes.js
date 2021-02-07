
/**
 * @roxi/routify 2.12.0
 * File generated Sun Feb 07 2021 13:55:33 GMT+0100 (Mitteleuropäische Normalzeit)
 */

export const __version = "2.12.0"
export const __timestamp = "2021-02-07T12:55:33.635Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "children": [
    {
      "isFallback": true,
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        },
        {
          "ext": "svx",
          "isPage": true,
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/blog/jekyll-tutorial",
          "id": "_blog_jekyllTutorial",
          "component": () => import('../src/pages/blog/jekyll-tutorial.svx').then(m => m.default)
        },
        {
          "ext": "svx",
          "isPage": true,
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/blog/test",
          "id": "_blog_test",
          "component": () => import('../src/pages/blog/test.svx').then(m => m.default)
        }
      ],
      "isLayout": true,
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/blog",
      "id": "_blog__layout",
      "component": () => import('../src/pages/blog/_layout.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

