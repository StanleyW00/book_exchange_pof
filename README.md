# Overview

BookFellow: A proof of concept for a website where users can list, discover, and exchange books with others. The platform enables users to connect, share their literary treasures, and find new reads, fostering a community of book lovers eager to trade their favorite titles.

# Setup Instructions

- Install dependencies in the project

```
npm install
```

- Copy `.env.example` and rename it to `.env`. Add mongoDB url for database.

```
# Environment
ENV=DEVELOPMENT

# MONGO ATLAS URL
DATABASE_URL= {paste mongoDB url here}
```

- Run localhost

```
npm run dev
```

# Key Features

- **List Unwanted Books**: Users can easily list books they no longer need for others to find and exchange.
- **Search for Specific Books**: A search function helps users quickly find the books they want.
- **Exchange Books**: Users can offer their own books in exchange for others, facilitating a seamless swap between members.

# Project Plan

- User Authentication

  Implement a secure user authentication system allowing users to sign up, log in, and manage their profiles.

- Manage Book Listings

  Develop features to enable users to modify and delete their own book listings after they are posted.

- Enhanced Book Search

  Expand the search functionality by adding filters (e.g., genre, author, condition) to make finding books more intuitive and efficient.

- Community Forum

  Create a forum where users can discuss books, share recommendations, and engage with fellow book lovers.

- User Follow Feature

  Introduce a follow system, allowing users to follow each other to stay updated on newly listed books and activities of their favorite users.

# Milestones

- [x] **Initial Features and UI**: Launched core functionality and basic user interface.
- [ ] **User Authentication**: Implement a secure login and registration system.
- [ ] **UI Redesign**: Improve the user interface for better usability and aesthetics.
- [ ] **Community Forum**: Build and integrate a forum for users to discuss and share book-related topics.
- [ ] **Enhanced Profile Features**: Add more customization and interaction options for user profiles.
