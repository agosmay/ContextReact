import React , { useState } from 'react'
import { NuevoHijo } from './NuevoHijo'
import { NuevoContextoFuncion } from './NuevoContextoFuncion'

export const NuevoContexto = () => {
	
	const [datosNuevos, setDatosNuevos] = useState("Bla bla")
	
	return (
		<>
			<NuevoContextoFuncion.Provider value={{
				datosNuevos,
				setDatosNuevos
			}}>
			
			<NuevoHijo />
			</NuevoContextoFuncion.Provider>
		</>
	
	);
	
	
	
	
}