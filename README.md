# workow-nuxt-frontend

> My neat Nuxt.js project

## VScode liveshare

- s[ecurity build files are hidden by default to participants](https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/security)
  > make vsls.json file in root folder

  ``` JSON
  "excludeFiles": []
  ```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

https://auth.nuxtjs.org/#getting-started

- Getting started with Nuxt
- nuxt auth https://www.youtube.com/watch?v=zzUpO8tXoaw&feature=youtu.be
nuxt apollo
nuxt vuetify
nuxt axios

## code splitting

- [webpack code splitting](https://webpack.js.org/guides/code-splitting/)

 > components/navbar/index.vue

``` Javascript
export default {
    components: {
        'navbar-section': () => ({
            component: import(/* webpackChunkName "navbarSection" */ '@/components/navbar')
        })
    }
}
```
