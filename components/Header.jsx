export default function Header({
  openModal,
}) {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1
          className="
          text-5xl
          font-black
          bg-gradient-to-r
          from-violet-600
          to-indigo-600
          bg-clip-text
          text-transparent
        "
        >
          TaskFlow
        </h1>

        <p className="text-slate-500 mt-2">
          Organize your work beautifully
        </p>
      </div>

      <button
        onClick={openModal}
        className="
        px-6
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-indigo-600
        text-white
        font-semibold
        shadow-lg
        hover:scale-105
        transition
      "
      >
        + New Task
      </button>
    </div>
  );
}