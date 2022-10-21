import React , { useContext } from 'react';
import { ContextoComision } from './ContextoComision'

export const Hijo4 = () => {
	const { numero , setDato } = useContext(ContextoComision)

	
	return (
		<>
			<div>4</div>
			<h3>Comision {numero}</h3>
			<button onClick={()=> {setDato("La mejor Comision")}}>Cambiar Dato</button>
		</>
	);
	
}