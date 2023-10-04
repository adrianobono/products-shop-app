# Product Shop App

### Checklist Specifications

- [X] Application developed using React.

- [X] Application must use a state management library, such as Zustand.

- [X] Application must use a routing library, such as React Router.

- [X] Application must use a form management library, such as Formik or React Hook Form.

- [ ] Application must use a form validation library, such as React-hook-form.

- [X] Application must use React-Query to share data between components via cache, hydrate data,control states with queries, loading, refetch, invalidQueries

- [ ] Application must have at least one unit test for each component.

- [X] Application must have an API to obtain and update product data.

- [] Application must use a library to make payments, such as Stripe.

### Tools used for development

- NodeJs
- Git Bash
- Visual Studio Code
- Yarn
- Postman

### History of development

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

11) Updated master branch and checkout to new branch to implement components and store
