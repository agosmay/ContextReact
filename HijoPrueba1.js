import React , { useContext } from 'react';
import { ContextoPruebaFuncion } from './ContextoPruebaFuncion'


export const HijoPrueba1 = () => {
	
const { datos, setDatos, numeros, setNumeros } = useContext(ContextoPruebaFuncion)

	
	return (
		<>
			<h1>Soy el Hijo Prueba1 </h1>
			<h2>Y los datos son {datos}</h2>
			<button onClick={()=> {setDatos("cambiame esta string")}}>Apretar</button>
			<h5>{numeros}</h5>
			<button onClick={()=> setNumeros("2100")}>New Year</button>
			
		</>
	
	
	)
	
}