import React , { useContext } from 'react' 
import { NuevoContextoFuncion } from './NuevoContextoFuncion'

export const NuevoHijo = () => {
	
	const { datosNuevos , setDatosNuevos } = useContext(NuevoContextoFuncion);
	return (
	
		<>
			<h1>Soy el Nuevo Hijo</h1>
			<h3>Estos son los datos nuevos : {datosNuevos}</h3>
			<button onClick= {()=> setDatosNuevos(Math.random()*8)}>Randomize</button>
			
		</>
	
	);
	
	
}