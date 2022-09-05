//import { useEffect } from "react";
import { useEffect } from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {
  // useEffect(() =>{
  // if (tareas.length >0 ){
  // console.log("iniciando..");
  //}
  //},[tareas]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Mis Tareas Pendientes
          </h2>

          {tareas.map((tarea) => {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          })}
        </>
      ) : (
        <h2 className="font-black text-3x1 text-center mb-10">
          No Tengo Tareas Pendientes
        </h2>
      )}
    </div>
  );
};

export default ListaTareas;
