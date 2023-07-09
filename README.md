This project bootstrapped with CRA.

# CRA Meta Tag Research

In this research, I will present a method to use current CRA react application and make use of Meta-tags without making the app SSR.

The main question we are going to answer is: Is it possible to do this? Short answer is yes, but we need to use NodeJS and Express to create a server and create static html for dynamic datas.

If the meta tags are static, then we can add some static meta tags to the `index.html` and everything will be ready. But if we want to have dynamic meta tags based on different URLs, we need to do it on server side. But what if we don't have server-side rendering enabled in our app?

## Setting Up Meta tags without SSR

### Using `NodeJS & Express`

In this method, we need to serve our application from Node/Express backend. Before returning the resposne to the broweser, we'll inject the desired tags in the `<head>` of the page.
