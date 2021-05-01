# In Class Mini-Amazon (Front-End)

This is the front-end of the web application, thus our client application. Upon load, this page makes a GET HTTP request, via fetch, to consume a sepcific end point in our Back-End API and then populate the DOM with the list of products that was returned.


Also, this page contains a form that will allow someone to create a new product. After a user fills out the form and hits the submit button, our Client application will send a POST HTTP request, via fetch, to our Back-End API. Our API will then receive the request with the payload (submitted form data) and store it in the database.


