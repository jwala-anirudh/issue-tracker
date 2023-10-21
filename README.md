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
