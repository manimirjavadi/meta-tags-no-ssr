This project bootstrapped with CRA.

# CRA Meta Tag Research

In this project, we will present a method to use current CRA react application and make use of Meta-tags without making the app SSR.

The main question we are going to answer is: Is it possible to do this? Short answer is yes, but we need to use NodeJS and Express to create a server and create static html for dynamic datas.

If the meta tags are static, then we can add some static meta tags to the `index.html` and everything will be ready. But if we want to have dynamic meta tags based on different URLs, we need to do it on server side. But what if we don't have server-side rendering enabled in our app?

## Setting Up Meta tags without SSR

### Using `NodeJS & Express`

In this method, we need to serve our application from Node/Express backend. Before returning the resposne to the browser, we'll inject the desired tags in the `<head>` of the page.

### Disadvantages:

- We need to setup a backend code to handle the requests coming from the client
- We need to fetch the data inside the backend code to handle the dynamic data
- With this method we should have in mind that we need to handle security vulnerabilities

## Running Application

To run application use:

```bash
npm install # or yarn install
npm run serve # yarn serve
```

To test if the meta-tags are working correctly, we can use ‍`localTunnel`. To install:

```bash
npm i -g localtunnel
```

Then after running application on a port like `3000`, run:

```bash
lt --port 3000
```

This will creat a link. Links to test meta-tags: `https://localhost:3000/post?id=<POST_ID>`.
