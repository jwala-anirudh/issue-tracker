# Issue tracker

## Dependencies & Setup

1. Prisma

```
npm i prisma
npx prisma init
```

Add changes to your schema.prisma where all the models are defined. Once that is completed, you need to run following to structure your schema.prisma file with proper syntax

```
npx prisma format
```

Inorder to update your actual DB with these new models as Tables run the following:

```
npx prisma migrate dev
```

2. Dummy data for SQL

```sql
INSERT INTO Issue (title, description, status, createdAt, updatedAt)
VALUES
    ('Database Connection Error', 'Users are reporting difficulties in connecting to the database. Investigate and resolve the issue.', 'OPEN', '2023-10-15 10:30:00', '2023-10-15 10:30:00'),
    ('Frontend Performance Degradation', 'The application\'s frontend is experiencing slower response times. Identify the bottlenecks and optimize the performance.', 'IN_PROGRESS', '2023-10-15 11:45:00', '2023-10-15 11:45:00'),
    ('User Authentication Failure', 'Users are unable to log in due to authentication failures. Check the authentication system and rectify the problem.', 'OPEN', '2023-10-15 13:20:00', '2023-10-15 13:20:00'),
    ('Server Outage', 'The server is currently down, and the application is inaccessible. Bring the server back online urgently.', 'OPEN', '2023-10-15 14:55:00', '2023-10-15 14:55:00'),
    ('Data Loss Bug', 'A bug is causing data loss for some users. Investigate the issue and restore the lost data.', 'IN_PROGRESS', '2023-10-15 16:10:00', '2023-10-15 16:10:00'),
    ('Payment Processing Error', 'Payments are failing, and users cannot complete transactions. Fix the payment processing system.', 'OPEN', '2023-10-15 18:40:00', '2023-10-15 18:40:00'),
    ('Missing User Profiles', 'Some user profiles have disappeared. Recover the missing data and restore the profiles.', 'IN_PROGRESS', '2023-10-15 20:15:00', '2023-10-15 20:15:00'),
    ('Security Vulnerability', 'A security vulnerability has been identified. Patch the system to prevent potential breaches.', 'IN_PROGRESS', '2023-10-15 22:00:00', '2023-10-15 22:00:00'),
    ('Feature Request: Dark Mode', 'Users are requesting a dark mode feature. Implement this feature for better user experience.', 'OPEN', '2023-10-16 08:30:00', '2023-10-16 08:30:00'),
    ('Broken Links in FAQ', 'The FAQ section contains broken links. Update the links to provide accurate information.', 'CLOSED', '2023-10-16 10:45:00', '2023-10-16 10:45:00'),
    ('User Account Deletion', 'Users are unable to delete their accounts. Provide a mechanism for account deletion.', 'OPEN', '2023-10-16 12:20:00', '2023-10-16 12:20:00'),
    ('Mobile App Crashes', 'The mobile app is crashing frequently. Investigate the issue and release a stability update.', 'OPEN', '2023-10-16 14:55:00', '2023-10-16 14:55:00'),
    ('Password Reset Not Working', 'Users cannot reset their passwords. Fix the password reset functionality.', 'CLOSED', '2023-10-16 16:10:00', '2023-10-16 16:10:00'),
    ('API Rate Limiting', 'Implement rate limiting for the API to prevent abuse and ensure fair usage.', 'IN_PROGRESS', '2023-10-16 18:40:00', '2023-10-16 18:40:00'),
    ('Email Notifications Delayed', 'Email notifications are delayed in delivery. Optimize email sending processes.', 'OPEN', '2023-10-16 20:15:00', '2023-10-16 20:15:00'),
    ('Broken Image Upload', 'Users are unable to upload images. Fix the image upload functionality.', 'IN_PROGRESS', '2023-10-16 22:00:00', '2023-10-16 22:00:00'),
    ('Localization Bug', 'A bug is affecting the localization of the application. Resolve the localization issues.', 'CLOSED', '2023-10-17 08:30:00', '2023-10-17 08:30:00'),
    ('Search Functionality Improvement', 'Enhance the search functionality to provide more relevant search results.', 'OPEN', '2023-10-17 10:45:00', '2023-10-17 10:45:00'),
    ('User Feedback Integration', 'Integrate user feedback collection and analysis into the application.', 'IN_PROGRESS', '2023-10-17 12:20:00', '2023-10-17 12:20:00'),
    ('File Download Performance', 'File downloads are slow. Optimize file download performance for faster downloads.', 'CLOSED', '2023-10-17 14:55:00', '2023-10-17 14:55:00');
```

```sql
INSERT INTO Issue (title, description, status, createdAt, updatedAt)
VALUES
    ('User Profile Picture Issue', 'Users are experiencing problems uploading or changing their profile pictures. Investigate and fix this issue.', 'OPEN', '2023-10-17 16:10:00', '2023-10-17 16:10:00'),
    ('Billing System Integration', 'Integrate a new billing system for improved payment processing and subscription management.', 'IN_PROGRESS', '2023-10-17 18:40:00', '2023-10-17 18:40:00'),
    ('Network Latency Problems', 'Some users are reporting high network latency. Conduct network analysis and optimize for lower latency.', 'OPEN', '2023-10-17 20:15:00', '2023-10-17 20:15:00'),
    ('User Permission Management', 'Implement a robust user permission management system for better access control.', 'CLOSED', '2023-10-17 22:00:00', '2023-10-17 22:00:00'),
    ('Broken Checkout Process', 'Users are unable to complete purchases due to issues with the checkout process. Fix the problem.', 'IN_PROGRESS', '2023-10-18 08:30:00', '2023-10-18 08:30:00'),
    ('Content Synchronization Issue', 'Content synchronization between devices is failing. Ensure seamless synchronization.', 'OPEN', '2023-10-18 10:45:00', '2023-10-18 10:45:00'),
    ('Data Import and Export Feature', 'Develop a data import and export feature to allow users to move their data in and out of the application.', 'OPEN', '2023-10-18 12:20:00', '2023-10-18 12:20:00'),
    ('Performance Analytics Dashboard', 'Create a performance analytics dashboard to provide insights into system performance.', 'CLOSED', '2023-10-18 14:55:00', '2023-10-18 14:55:00'),
    ('Mobile App Push Notifications', 'Implement push notifications for the mobile app to keep users informed of updates and events.', 'OPEN', '2023-10-18 16:10:00', '2023-10-18 16:10:00'),
    ('Localization Expansion', 'Expand language support and localization options to reach a wider audience.', 'IN_PROGRESS', '2023-10-18 18:40:00', '2023-10-18 18:40:00'),
    ('API Documentation Update', 'Update the API documentation to provide developers with accurate and up-to-date information.', 'OPEN', '2023-10-18 20:15:00', '2023-10-18 20:15:00'),
    ('User Account Security Audit', 'Conduct a security audit of user accounts to identify and rectify vulnerabilities.', 'OPEN', '2023-10-18 22:00:00', '2023-10-18 22:00:00'),
    ('Enhanced User Onboarding', 'Improve the user onboarding process to make it more intuitive for new users.', 'CLOSED', '2023-10-19 08:30:00', '2023-10-19 08:30:00'),
    ('Bug Report and Feedback Form', 'Implement a bug reporting and feedback form to gather user input and issues.', 'IN_PROGRESS', '2023-10-19 10:45:00', '2023-10-19 10:45:00'),
    ('File Upload Size Limit Increase', 'Increase the file upload size limit to accommodate larger files.', 'OPEN', '2023-10-19 12:20:00', '2023-10-19 12:20:00'),
    ('Third-Party Integration', 'Integrate a third-party service for enhanced functionality and features.', 'IN_PROGRESS', '2023-10-19 14:55:00', '2023-10-19 14:55:00'),
    ('User Activity Logging', 'Implement user activity logging for enhanced security and auditing.', 'CLOSED', '2023-10-19 16:10:00', '2023-10-19 16:10:00'),
    ('Subscription Plan Upgrades', 'Introduce new subscription plans with additional features and benefits.', 'OPEN', '2023-10-19 18:40:00', '2023-10-19 18:40:00'),
    ('Performance Testing and Optimization', 'Conduct performance testing and optimization for the entire system to improve speed and responsiveness.', 'OPEN', '2023-10-19 20:15:00', '2023-10-19 20:15:00');
```
