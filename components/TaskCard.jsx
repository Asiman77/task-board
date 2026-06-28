"use client";

import { deleteTask, moveTask } from "@/services/taskService";

export default function TaskCard({
  task,
  refreshTasks,
  openEditModal,
}) {
  async function handleDelete() {
    if (
      confirm(
        "Are you sure you want to delete this task?"
      )
    ) {
      await deleteTask(task.id);
      refreshTasks();
    }
  }

  async function handleMove() {
    let newStatus = task.status;

    if (task.status === "todo") {
      newStatus = "progress";
    } else if (task.status === "progress") {
      newStatus = "done";
    } else {
      newStatus = "todo";
    }

    await moveTask(task.id, newStatus);
    refreshTasks();
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "text/plain",
      task.id
    );
  };

  const priorityColors = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-emerald-100 text-emerald-700",
  };

  const currentPriority =
    task.priority?.toLowerCase() ||
    "medium";

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="
        bg-white/90
        backdrop-blur-xl
        rounded-3xl
        border
        border-white
        p-5
        mb-4
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-grab
      "
    >
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-slate-800">
          {task.title}
        </h3>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
            uppercase
            ${priorityColors[currentPriority]}
          `}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-slate-500 mt-3 text-sm">
        {task.description ||
          "No description provided"}
      </p>

      <div className="flex items-center mt-5">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-indigo-600
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
        >
          {task.assignee
            ? task.assignee[0].toUpperCase()
            : "?"}
        </div>

        <div className="ml-3">
          <p className="font-semibold text-sm">
            {task.assignee ||
              "Unassigned"}
          </p>

          <p className="text-xs text-slate-400">
            Team Member
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-5">
        <button
          onClick={handleMove}
          className="
            flex-1
            py-2
            rounded-xl
            bg-slate-100
            hover:bg-slate-200
            text-sm
            font-medium
            transition
          "
        >
          Move
        </button>

        <button
          onClick={() =>
            openEditModal(task)
          }
          className="
            flex-1
            py-2
            rounded-xl
            bg-indigo-100
            text-indigo-700
            hover:bg-indigo-200
            text-sm
            font-medium
            transition
          "
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="
            px-4
            rounded-xl
            bg-red-100
            text-red-600
            hover:bg-red-200
            text-sm
            font-medium
            transition
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}