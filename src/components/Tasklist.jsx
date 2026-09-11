import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onRemove }) => {
  const priorityColors = {
    baixa: 'bg-emerald-200 text-emerald-900',
    média: 'bg-amber-200 text-amber-900',
    alta: 'bg-red-200 text-red-900',
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className={`border-2 border-black bg-white p-4 flex items-start gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${task.completed ? 'opacity-50' : ''}`}>
      <button
        type="button"
        onClick={() => onToggleComplete(task.id)}
        className={`mt-1 w-5 h-5 shrink-0 border-2 border-black flex items-center justify-center text-xs ${task.completed ? 'bg-[#CCFF00]' : 'bg-transparent'}`}
        aria-label="Marcar como concluída"
      >
        {task.completed && '✓'}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`font-sans font-bold text-sm break-words ${task.completed ? 'line-through' : ''}`}>
          {task.name}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="font-sans text-xs text-slate-600">
            📅 {formatDate(task.date)}
          </span>
          <span className={`font-space text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
        </div>
        {task.description && (
          <p className="font-sans text-xs text-slate-500 mt-2 break-words">{task.description}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onRemove(task.id)}
        className="text-slate-400 hover:text-red-600 transition-colors shrink-0"
        aria-label="Remover tarefa"
      >
        🗑
      </button>
    </div>
  );
};

const TaskList = ({ tasks, onToggleComplete, onRemove }) => {
  const [filter, setFilter] = useState('todas');

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pendentes') return !t.completed;
    if (filter === 'concluidas') return t.completed;
    return true;
  });

  const pendingCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  const filters = [
    { key: 'todas', label: 'Todas', count: tasks.length },
    { key: 'pendentes', label: 'Pendentes', count: pendingCount },
    { key: 'concluidas', label: 'Concluídas', count: completedCount },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            type="button"
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-space text-[10px] sm:text-xs font-extrabold uppercase tracking-wider border-2 border-black px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer ${
              filter === f.key ? 'bg-[#111110] text-[#F7F4EB]' : 'bg-transparent text-black'
            }`}
          >
            {f.label}
            <span className={`rounded-full px-1.5 text-[10px] ${filter === f.key ? 'bg-[#CCFF00] text-black' : 'bg-black/10'}`}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <div className="border-2 border-dashed border-slate-400 p-8 text-center text-slate-500 font-sans text-sm">
          {filter === 'todas' && 'Sua lista de tarefas aparecerá aqui...'}
          {filter === 'pendentes' && 'Nenhuma tarefa pendente 🎉'}
          {filter === 'concluidas' && 'Nenhuma tarefa concluída ainda.'}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;