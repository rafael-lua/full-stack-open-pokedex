### LINK TO THE OTHER REPOSITORY: https://github.com/rafael-lua/teacher-dashboard

Text related to the exercise 11.1:

I picked the language C# as I had some experience with it in the past in game development. I have an idea of a small ASP.NET project.

- Searching up, a very popular linting for .NET projects is StyleCop. It enforces code styling and can be inserted in build processes. For testing, I believe Selenium WebDriver is a good choice, as it allow automatic testing to run with CI. For last, the build itself can be made using the Azure DevOps tool, which seems to be the standard for .NET applications.
- Azure DevOps is one more tool for doing CI/CD in C# projects, and I feel it might be really nice since it is also from Microsoft, so it should be more smooth to set up. Another solution that I have found is AppVeyor, which seems to be a good alternative to Github Actions.
- My project would be a clone of Trello. The project itself seems simple enough to be used with cloud CI solutions. Both the API on the server and the frontend can be tested and deployed independently, and I imagine each one would have their own pipelines.

---

# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
