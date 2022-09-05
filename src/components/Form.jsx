import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState("false");

  useEffect(() => {
    //console.log(tarea);
    if (Object.keys(tarea).length > 0) {
      //console.log("tenemos una tarea");
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
      //alert('se diligencio formulario')
    }
  }, [tarea]);

  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  //validacion Formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //setTareas(setTareas)

    // Objeto de tareas
    const objetoTareas = {
      titulo,
      fecha,
      descripcion
    };

    if(tarea.id){
    //editando tarea

    objetoTareas.id = tarea.id;

    const tareasActualizadas = tareas.map(tareaState =>
      tareaState.id === tarea.id ? objetoTareas : tareaState
      );
     
      setTareas(tareasActualizadas)
      setTarea([])

    //console.log('Editando tarea')
    }else {
    //nueva tarea
    //console.log('Nueva Tarea')
    objetoTareas.id = generarId();
    setTareas([...tareas, objetoTareas]);
    };

   
    //limpiar nuestro formulario
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">
        Creacion De Tareas
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <AlertError>
            <p>Todos los campos son obligatorios</p>
          </AlertError>
        )}

        <div className="mb-5">
          <label
            htmlFor="Titulo"
            className="block text-gray-800 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo De La Tarea"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-800 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-800 uppercase font-bold"
          >
            DESCRIPCION
          </label>
          <textarea
            id="titulo"
            type="text"
            placeholder="descripcion De La Tarea"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {!tarea.id ? (
          <input
            type="submit"
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md 
          hover:bg-blue-700 transition-colors cursor-pointer "
            value="Crear Tarea"
          />
        ) : (
          <input
            type="submit"
            className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md 
          hover:bg-purple-700 transition-colors cursor-pointer "
            value="Actualizar Tarea"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
