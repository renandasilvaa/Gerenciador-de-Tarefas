import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskList from './TaskList';

const Form = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const [tasks, setTasks] = useLocalStorage('tarefas', []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: task,
      date,
      priority,
      description,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTask('');
    setDate('');
    setPriority('');
    setDescription('');
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t )
    );
  };

  const handleRemove = (id) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  return (
    <section
      id="Form"
      className="w-full min-h-screen bg-[#F7F4EB] px-4 py-16 flex flex-col items-center justify-start relative z-10 border-t-4 border-black select-none"
    >
      <div className="w-full max-w-6xl">

        <div className="w-full mb-12 flex flex-col items-start gap-1">
          <p className="font-space text-slate-500 font-extrabold text-xs tracking-widest uppercase">
            o app
          </p>
          <h2 className="font-garamond text-slate-900 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Sua lista, do seu jeito.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">

          <div className="w-full bg-[#F7F4EB] border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

            <h3 className="font-garamond text-2xl sm:text-3xl font-black text-slate-900 mb-1">
              Nova tarefa
            </h3>
            <p className="text-slate-600 font-sans text-xs sm:text-sm font-medium mb-6">
              Preencha e risque da lista depois.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black">
                  O que precisa ser feito? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Ex: Preparar apresentação de sexta"
                  className="w-full border-2 border-black p-3 font-sans text-sm bg-transparent focus:outline-none focus:bg-white placeholder-slate-400 font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col gap-1.5">
                  <label className="font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black">
                    Data de conclusão <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border-2 border-black p-3 font-sans text-sm bg-transparent focus:outline-none focus:bg-white font-medium cursor-pointer"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black">
                    Nível de prioridade <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full border-2 border-black p-3 font-sans text-sm bg-transparent focus:outline-none focus:bg-white font-medium cursor-pointer appearance-none"
                    required
                  >
                    <option value="" disabled hidden>Selecione uma opção</option>
                    <option value="baixa">Baixa</option>
                    <option value="média">Média</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-space font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black">
                  Descrição <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalhes, links, lembretes..."
                  rows={3}
                  className="w-full border-2 border-black p-3 font-sans text-sm bg-transparent focus:outline-none focus:bg-white placeholder-slate-400 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full border-2 border-black bg-[#CCFF00] py-3.5 font-space font-black text-xs sm:text-sm tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all text-black"
              >
                + Adicionar Tarefa
              </button>
            </form>

          </div>

          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onRemove={handleRemove}
          />

        </div>

      </div>
    </section>
  );
};

export default Form;