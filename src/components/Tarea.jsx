//import { useEffect } from "react";

const Tarea = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  const handleEliminar = () => {
    //consolole.log('Eliminando tarea', id )
    const respuesta = confirm('Desea eliminar esta tarea ?' );
    if(respuesta){
      eliminarTarea(id)
    }
  };

  //useEffect(() => {
    //console.log(tarea);
  //}, [tarea]);

  return (
    <div className="bg-white shadow-md px-5 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo: <span className="font-normal normal-case">{titulo} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripcion:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div className="felx justify-between">
        <button
          className=" bg-green-600 hover:bg-green-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={() => setTarea(tarea) }
        >
          Actualizar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          //onClick={ () => eliminarTarea(id) }
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
