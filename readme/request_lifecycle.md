# Request Lifecycle

![lifecycle](https://nuxtjs.org/nuxt-schema.svg)

## **STEP 1&2**: Incoming Request, nuxtServerInit

- User's browser sends a GET request to workow-nuxt-frontend.herokuapp.com, and Nuxt initializes itself in the Vuex store as a Vuex module. [Documentation here.](https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action)
  - /server/index.js

    ```javascript
    async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)
    ```

## **STEP 3**: middleware

- Nuxt determines what page to look for. Type of application Nuxt generates depends on nuxt config file. [documentation here](https://nuxtjs.org/guide/#schema)
  
  - /nuxt.config.js
  
    ```javascript
    module.exports = {
        mode: 'universal' // server side rendering, browser sends a request to the server when the user navigates to another html file
    ```

    OR

    ```javascript
    module.exports = {
        mode: 'spa' // server creates one html file, and sends javascript files to browser to render further html locally
    ```

    OR

    ```javascript
    module.exports = {
        mode: 'generated' // pre-rendered html
    ```

## **STEP 3**: Validation

- Nuxt validates page once found based on user definded validation function

## **STEP 4**: 


## **STEP ?:**  Nuxt (invisible server) serves default layout to the browser

- On the first request, the default layout is served to the browser
  - /layouts/default.vue

    ``` html
    <template>
        <v-app>
            <!-- navbar -->
            <navbar-section />
            <v-content>
                <v-container>
                    <!-- pages injected here -->
                    <nuxt />
                </v-container>
            </v-content>
            <!-- footer -->
        </v-app>
    </template>
    ```

## STEP ?: Nuxt injects pages into the layout depending on the requested url

- /pages/*.vue

## **STEP \#**: TITLE

- setp description and documentation link
  - file name

    ``` html
    code example
    ```
