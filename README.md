# Overview

A proof of concept about a book exchanging website. Users can list books, find books, and exchange books that users wanted.

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
DATABASE_URL= {paste url here}
```

- Run localhost

```
npm run dev
```

# Key Features

- List no longer wanted books for exchange
- Search specific wanted books
- Exchange other user's book with another own book

# Project Plan

- Develop User Authentication
- Modify and delete your own books
- Forum for book lovers
- Follow feature for users

# Milestones

- [x] Add base features and UI
- [ ] Complete user authentication
- [ ] Redesign UI
- [ ] Completed
