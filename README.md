# Product Shop App

- This project is a simple MVP Shop Cart

- Install and use: 

    1) Using a command terminal type this clone command: git clone https://github.com/adrianobono/products-shop-app.git and press enter; 

    2) After clone executed type: cd products-shop-app/ and press enter to access the project folder;

    3) In the project folder type: yarn install and press Enter;
    
    4) Then run the project typing: yarn start  and press Enter;

    5) If everthing is ok the project will be load automatically in your defaut browser at port 3000 (<http://localhost:3000>)

### Run tests:
    In a terminal using the project path type: yarn test and press enter;

### Info:

- The project needs a internet conectio to access the online API.
- On checkout this mock credit card number: 4242 4242 4242 4242

#### Future improvements

- A better Nav Menu
- A shop layout for first page
- Finalize the cart shop


### Development checklist specifications

- [X] Application developed using React.

- [X] Application must use a state management library, such as Zustand.

- [X] Application must use a routing library, such as React Router.

- [X] Application must use a form management library, such as Formik or React Hook Form.

- [X] Application must use a form validation library, such as React-hook-form.

- [X] Application must use React-Query to share data between components via cache, hydrate data,control states with queries, loading, refetch, invalidQueries

- [X] Application must have at least one unit test for each component.

- [X] Application must have an API to obtain and update product data.

- [X] Application must use a library to make payments, such as Stripe.

### Tools used for development

- ReactJs 18.2.0
- NodeJs 16.0.2
- Git Bash
- Visual Studio Code
- Yarn
- Postman

### Initial History of development

1) Created a react app (CRA) using TypeScript:

    Command Line: npx create-react-app products-shop-app --template typescript
    reference link: <https://create-react-app.dev/docs/adding-typescript/>

2) Code cleaning and first commit made;

3) Added some librarys requerides of project:

    Command Line:  yarn add zustand

    Command Line: yarn add react-router @types/react-router

    Command Line: yarn add axios @types/axios

4) Created initial folder structure using Feature-based pattern;

5) Started inital documentation using this README.md file and added a checklist of requirements;

6) Added sass library and commited and merge actual branch to master

7) Updated master branch and checkout to new branch to implement minimal api first for products CRUD

8) Added online Json-Server API for products, reference links   <https://github.com/kitloong/json-server-vercel> and <https://www.youtube.com/watch?v=A--aYRbzKdU>

9) Added initial pages to use routes

10) Finalized api evaluate, added initial list on product page and simple routes to pages

11) Updated master branch and checkout to new branch to implement components and requirements of
