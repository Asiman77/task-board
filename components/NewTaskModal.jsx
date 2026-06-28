"use client";

import { useState } from "react";
import { createTask } from "@/services/taskService";

export default function NewTaskModal({
  closeModal,
  refreshTasks,
}) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [assignee, setAssignee] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  async function handleSubmit(e) {
    e.preventDefault();

    await createTask({
      title,
      description,
      assignee,
      priority,
      status: "todo",
    });

    refreshTasks();
    closeModal();
  }

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/40
      backdrop-blur-md
      flex
      justify-center
      items-center
      z-50
    "
    >
      <div
        className="
        w-full
        max-w-lg
        bg-white
        rounded-[32px]
        p-8
        shadow-2xl
      "
      >
        <h2 className="text-2xl font-bold mb-6">
          Create Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-2xl"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-2xl h-28"
          />

          <input
            placeholder="Assignee"
            value={assignee}
            onChange={(e) =>
              setAssignee(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-2xl"
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-2xl"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="
              flex-1
              py-3
              rounded-2xl
              border
            "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
              flex-1
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              text-white
              font-semibold
            "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}