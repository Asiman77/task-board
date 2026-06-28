import { supabase } from "@/lib/supabaseClient";

export async function getTasks() {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Get Tasks Error:", error);
        return [];
    }

    return data;
}

export async function createTask(task) {
    const { data, error } = await supabase
        .from("tasks")
        .insert([task])
        .select();

    if (error) {
        console.error("Create Task Error:", error);
        return null;
    }

    console.log("Task Created:", data);
    return data;
}

export async function updateTask(id, updatedTask) {
    const { data, error } = await supabase
        .from("tasks")
        .update(updatedTask)
        .eq("id", id)
        .select();

    if (error) {
        console.error("Update Task Error:", error);
        return null;
    }

    return data;
}


export async function deleteTask(id) {
    const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Delete Task Error:", error);
    }
}


export async function moveTask(id, status) {
    const { data, error } = await supabase
        .from("tasks")
        .update({ status })
        .eq("id", id)
        .select();

    if (error) {
        console.error("Move Task Error:", error);
        return null;
    }

    return data;
}