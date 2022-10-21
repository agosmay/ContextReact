import React, { useState } from 'react';
import { ContextoPruebaFuncion } from './ContextoPruebaFuncion'
import { HijoPrueba1 } from './HijoPrueba1'


export const ContextoPrueba  = () => {
	
	const [datos , setDatos] = useState("Datos a compartir")
	const [numeros, setNumeros] = useState("These are the numbers")
	
	return (
	
	
		<>
			<ContextoPruebaFuncion.Provider value={{
				datos,
				setDatos,
				numeros, 
				setNumeros
			}}>
			<HijoPrueba1 />
	
			</ContextoPruebaFuncion.Provider>
			
		</>
	
	
	);
	
}