# **Project Setup**

## **Prerequisites:**

- **Node.js and npm (or yarn):** Ensure you have Node.js and npm (or yarn) installed.
- **.NET Core SDK:** Install the .NET Core SDK.

## **Cloning the Repository:**

1. Clone this repository to your local machine:

   ```bash
   git clone [[repository_url]](https://github.com/AliSafari-IT/asm-ca.git)
   ```

## **Installing Dependencies:**

1. **Backend:**
   Navigate to the `src/API` directory:

   ```bash
   cd src/API
   ```

   Install the required dependencies:

   ```bash
   dotnet restore
   ```

2. **Frontend:**
   Navigate to the `src/Frontend` directory:

   ```bash
   cd src/Frontend
   ```

   Install the required dependencies:

   ```bash
   npm install
   ```

## **Running the Application:**

1. **Backend:**
   In the `src/API` directory, run:

   ```bash
   dotnet run
   ```

2. **Frontend:**
   In the `src/Frontend` directory, run:

   ```bash
   npm start
   ```

## **Project Structure:**

The project is structured using Clean Architecture principles, separating concerns into layers:

- **Core**: Contains domain entities, interfaces, and value objects.
- **Application**: Houses the business logic, including commands, queries, and handlers.
- **Infrastructure**: Implements data access, external services, and other infrastructure concerns.
- **API**: Defines the API endpoints and interacts with the application layer.
- **Frontend**: The React frontend, handling user interaction and data display.

## **Testing:**

Unit and integration tests are included in the `tests` directory. To run tests:

```bash
# For backend tests
dotnet test

# For frontend tests
npm test
```

## **Deployment:**

Deployment strategies can vary. Consider using containerization (Docker) and deployment platforms like Azure App Service, AWS Elastic Beanstalk, or Kubernetes.
