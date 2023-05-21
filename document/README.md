## Pipeline Script README

This README provides an overview of the pipeline script defined in the `config.yml` file.

### Pipeline Description

The pipeline script follows a continuous integration and deployment process for a Node.js application. It uses CircleCI as the CI/CD platform and consists of the following stages:

1. **Build Stage**: This stage builds the application by installing the dependencies, caching them for future builds, and running the build command.

### Environment Variables

The following environment variables are set in the `build` job:

- `DB_USER`: The username for the PostgreSQL database.
- `DB_HOST`: The hostname or endpoint of the PostgreSQL database.
- `DB_NAME`: The name of the PostgreSQL database.
- `DB_PASSWORD`: The password for the PostgreSQL database.
- `DB_PORT`: The port number for the PostgreSQL database.

Make sure to replace these variables with the actual values specific to your application and environment.

### Pipeline Steps

1. **Checkout**: This step checks out the source code from the version control system.
2. **Restore Cache**: It restores the cached dependencies (node_modules) from a previous build, if available.
3. **Install Dependencies**: This step installs the application's dependencies using the `yarn install` command.
4. **Save Cache**: It caches the dependencies (node_modules) for future builds, improving build performance.
5. **Build**: This step runs the `yarn build` command to build the application.

### Workflow

The pipeline is defined under the `build-and-deploy` workflow. It is triggered when there is a code change in either the `main` or `master` branch, as specified in the `filters` section of the `build` job.

By following this pipeline script, your Node.js application will go through the build process whenever changes are pushed to the specified branches, ensuring that the latest version of the application is built and ready for deployment.

Note: Remember to configure the necessary AWS credentials and S3 bucket details in your deployment step if you intend to deploy the application to AWS S3.