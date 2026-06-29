"use client";

import { useEffect, useState } from "react";
import Board from "@/components/Board";
import Header from "@/components/Header";
import NewTaskModal from "@/components/NewTaskModal";
import EditTaskModal from "@/components/EditTaskModal";
import { getTasks } from "@/service/taskService";

type Task = {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: string;
  status: string;
  created_at: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);

  async function loadTasks() {
    const data = await getTasks();
    if (data) setTasks(data as Task[]);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="w-11/12 max-w-7xl mx-auto py-10 px-4 md:px-0">
      <Header openModal={() => setIsModalOpen(true)} />

      <Board
        tasks={tasks}
        refreshTasks={loadTasks}
        openEditModal={setSelectedTask}
      />

      {isModalOpen && (
        <NewTaskModal
          closeModal={() => setIsModalOpen(false)}
          refreshTasks={loadTasks}
        />
      )}

      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          closeModal={() => setSelectedTask(null)}
          refreshTasks={loadTasks}
        />
      )}
    </main>
  );
}