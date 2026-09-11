

const Formulario = () => {

  return (

    

    <div className="w-full min-h-screen bg-[#F7F4EB] px-4 py-6 sm:p-8 md:p-16 flex flex-col justify-between select-none ">
      <header className="w-full flex items-center justify-between relative z-10 mb-8 sm:mb-0">
        <span className="font-garamond text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-black">
          Web-Development - Checkpoint 4 . 
        </span>
        <a  href="#Form" className="font-garamond border-2 border-black bg-[#CCFF00] px-4 py-2 sm:px-6 sm:py-2.5 font-bold tracking-wider text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ">
          COMEÇAR
        </a>
      </header>

      <main className="w-full max-w-6xl flex-1 flex flex-col justify-center px-2 sm:pl-8 md:pl-20 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 items-start">

          <p className="font-garamond sm:text-lg md:text-xl font-bold ">
            Gerenciador de Tarefas
          </p>
          



          
          <h1 className="font-garamond text-[11vw] sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tight text-slate-900 leading-[1.0] break-words">
            Menos caos.
            <br />
            Mais{" "}
            <span className="relative inline-block z-10 italic before:absolute before:inset-x-0 before:bottom-1 sm:before:bottom-3 before:-z-10 before:h-[40%] before:bg-[#CCFF00]">
              feito.
            </span>
          </h1>

          <p className=" font-space text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-sans max-w-xl lg:max-w-2xl leading-relaxed font-normal">
            Anote o que precisa ser feito, marque a data, defina a prioridade e
            risque da lista. Suas tarefas ficam salvas no navegador — mesmo se
            você fechar a página.
          </p>

          <a href="#Form"  className="w-fit inline-flex items-center border-2 border-black bg-[#111110] text-[#F7F4EB] font-sans font-bold text-xs sm:text-sm tracking-widest uppercase px-6 py-4 shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#CCFF00] cursor-pointer" >
            Adicionar minha primeira tarefa
          </a>
        </div>
      </main> 
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] pointer-events-none select-none z-0 translate-y-[20%] sm:translate-y-[28%] text-center">

        <h2 className="font-garamond text-[21vw] font-black tracking-tighter text-[#EBE7DC] leading-none uppercase select-none">

        Tarefas

        </h2>

      </div>

    
     
    </div>
       
    
  );
};

export default Formulario;
