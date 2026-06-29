# TaskFlow — Team Task Management System

## Live Demo

🔗 [https://task-board-u3f8.vercel.app/](https://your-project.vercel.app) 

## GitHub Repository

🔗 https://github.com/Elcinn4013/task-board 

---

## Team

| Name              | GitHub                        |
|-------------------|-------------------------------|
| Nuray Taghiyeva   | https://github.com/Nuray745   |
| Elchin Guluzade   | https://github.com/Elcin4013  |
| Sevinc Quliyeva   | https://github.com/Sevinc1003 |
| Revan Abushov     | https://github.com/revandev11 |
| Asiman Mirzaliyev | https://github.com/Asiman77   |


---

## About

TaskFlow is a Kanban-style task management application built with Next.js and Supabase. It helps teams organize their work by creating tasks, assigning them to team members, and moving them through different workflow stages.

This board is built for our final project team and will keep being used to plan and track our own work after this lab.

---

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Assign tasks to team members
- Move tasks between **To Do**, **In Progress**, and **Done**
- Drag and drop support
- Task priority (Low, Medium, High)
- Persistent storage with Supabase

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** Tailwind CSS
- **Database:** [Supabase](https://supabase.com/) (hosted Postgres)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Running Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/task-board.git
   cd task-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the project root:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   You'll find these in your [Supabase dashboard](https://supabase.com/dashboard) under **Project Settings → API**.

4. **Set up the database**

   In the Supabase SQL editor, create the `tasks` table (and a `members` table if you're tracking assignees separately). At minimum, `tasks` needs: `id`, `title`, `description`, `status`, `priority`, `assignee`, `created_at`.

5. **Run the dev server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
task-board/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Board.jsx            # Main board, holds columns and drag-and-drop logic
│   ├── Column.jsx            # Single column (To Do / In Progress / Done)
│   ├── TaskCard.jsx          # Individual task card
│   ├── NewTaskModal.jsx      # Modal for creating a task
│   ├── EditTaskModal.jsx     # Modal for editing a task
│   └── Header.jsx            # Top nav / board header
├── lib/
│   └── supabaseClient.js     # Supabase client setup
├── services/
│   └── taskService.js        # CRUD calls to Supabase (create, update, move, delete)
├── public/
├── .env.local                # Environment variables (not committed)
└── README.md
```

---

## Deployment

The app is deployed on Vercel, connected to this GitHub repo. Every push to `main` triggers a new deployment. Environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in the Vercel project's Environment Variables settings, not committed to the repo.

---

Built for **Unit 8 — React + Next.js**, Ironhack Web Fullstack.