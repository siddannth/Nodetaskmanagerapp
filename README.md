
Task Manager REST API (Node.js, Express, MongoDB, Mongoose)

Built a full-featured task management backend with user authentication and task CRUD operations.

Implemented secure user registration and login with password hashing (bcrypt) and JWT-based authentication.

Designed a User model supporting multiple active tokens, task ownership, and virtual relations for tasks.

Developed Task model with owner reference, allowing users to create, update, delete, and fetch only their own tasks.

Enabled filtered task retrieval (e.g., completed vs. incomplete) using Mongoose population with dynamic query matching.

Enforced route-level security via authentication middleware to protect user and task data.

Applied data sanitization by overriding JSON serialization to hide sensitive information like passwords and tokens.

Planned future improvements:

Email notifications for account activity and reminders.

Comprehensive unit and integration testing for robustness.

Additional features like pagination, sorting, and task sharing.
