# Eflyn Interview Project Documentation

The Eflyn Interview Project is a comprehensive task management application built using Angular v15 for the frontend and NestJS for the backend. The application allows users to create lists, add to-do items, complete tasks, and delete items. This documentation provides an in-depth overview of the project's functionality, file structure, and code snippets to understand how the entire application works.

Created by `Nikolas Smith.`

## Table of Contents

- Project Structure
- Backend (NestJS)
  - App Module
  - List Module
  - Todo Module
  - Logging Service
- Frontend (Angular v15)
  - Components
  - Services
  - Modules
  - Routing
- Running the Application

## Project Structure

The project's root (`Eflyn-Interview-Project`) is organized as follows:

- `src`: Contains the backend code written in NestJS
- `interview-app`: A separate folder containing the frontend code written in Angular v15
- `package.json`: Contains the project dependencies, scripts, and configuration details
- `main.ts`: The entry point for the NestJS application

The `interview-app` folder has its own directory structure containing the Angular components, services, modules, and other necessary files:

```
interview-app
├── src
│   ├── app
│   │   ├── todo-list
│   │   │   ├── list
│   │   │   ├── todo
│   │   │   ├── todo-list
│   │   │   ├── confetti-canvas
│   │   │   ├── loading
│   │   │   ├── models
│   │   │   ├── list.service.ts
│   │   │   ├── todo.service.ts
│   │   │   ├── todo-list.module.ts
│   │   │   └── todo-list-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.spec.ts
│   │   ├── app.component.scss
│   │   ├── app.component.html
│   │   ├── app-routing.module.ts
│   │   └── confetti-canvas
│   ├── assets
│   │   └── .gitkeep
│   └── main.ts
└── package.json
```

## Backend (NestJS)

The backend is built using NestJS, and it consists of two main modules: List Module and Todo Module. Both modules interface with a MySQL database utilizing TypeORM, and there is a custom logging service for managing error logs.

### App Module

The `app.module.ts` is the primary module of the NestJS application. It imports the necessary modules and sets up a connection to the MySQL database using TypeORM.

```
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '../..',
        'interview-app/dist/interview-app'
      ),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hacknik123',
      database: 'interview_app_db',
      entities: [List, Todo],
      synchronize: true,
    }),
    ListModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggingService],
})
export class AppModule {}

```

### List Module

The List Module handles the CRUD operations for Lists. The following files are part of this module:

- `list.controller.ts`: Contains the endpoints for CRUD operations on lists
- `list.service.ts`: Handles the business logic for CRUD operations on lists using the TypeORM repository
- `list.entity.ts`: Defines the List entity and its properties


### Todo Module

The Todo Module handles the CRUD operations for Todo items. The following files are part of this module:

- `todo.controller.ts`: Contains the endpoints for CRUD operations on todo items
- `todo.service.ts`: Handles the business logic for CRUD operations on todo items using the TypeORM repository
- `todo.entity.ts`: Defines the Todo entity and its properties


### Logging Service

The `logging.service.ts` is a simple service for handling error logging and sending errors to the frontend. It utilizes an `EventEmitter` to handle error events.

```
@Injectable()
export class LoggingService {
  errorEvent: EventEmitter = new EventEmitter();

  logError(message: string, error: any) {
    console.error(message, error);
    this.errorEvent.emit('error', message);
  }
}

```

## Frontend (Angular v15)

The frontend of the application is built using Angular v15 and is organized into components, services, and modules. The application uses Angular Material for its UI components.

### Components

The main components in the application are:

- `todo-list`: The main component responsible for organizing and displaying the list of todos.
- `list`: The component in charge of handling lists as a group of todos.
- `todo`: The component responsible for managing individual todo items.
- `confetti-canvas`: The component in charge of displaying a confetti animation when all tasks are completed.
- `loading`: The component responsible for displaying a loading gif when a task is completed.

### Services

The primary services in the application are:

- `list.service.ts`: Handles the CRUD operations for lists and communicates with the NestJS backend.
- `todo.service.ts`: Handles the CRUD operations for todo items and communicates with the NestJS backend.

### Modules

The main module in the application is:

- `todo-list.module.ts`: Contains the declarations and imports for the todo-list and its related components.

### Routing

The application features a simple routing configuration:

- `app-routing.module.ts`: Configures the routes for the app's main components.
- `todo-list-routing.module.ts`: Configures the routes for the todo-list and its related components.

## Running the Application

To run the application, follow these steps:

1. Build the Angular app by running the following commands in the `interview-app` folder:
   ```
   cd interview-app
   ng build -c development --watch
   ```
2. In a separate terminal, start the NestJS server by running the following commands in the main directory:
   ```
   npm run start
   ```

The application will be accessible at `localhost:3000`.

## Conclusion

This documentation provides a detailed and professional summary of the Eflyn Interview Project, a comprehensive task management application built using Angular v15 for the frontend and NestJS for the backend. The documentation covers the project structure, frontend components, services, modules, routing, and backend setup while providing code snippets and explanations that help in understanding the functionality of the application.

## Stay in touch

- Author - [Nikolas Smith](https://nikolassmith.netlify.app/)
- Twitter - [@Zeitlos_Ein](https://twitter.com/Zeitlos_Ein)
