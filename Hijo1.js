import React , { useContext } from 'react';
import { Hijo2 } from './Hijo2'
import { ContextoComision } from './ContextoComision'

export const Hijo1 = () => {
	
	const { numero, dato } = useContext(ContextoComision)

	
	return (
		<>
			<div>1</div>
			<h3>Comision {numero}</h3>
			<h4>Este es el dato q cambia {dato}</h4>
			<Hijo2 />
			
		</>
	);
	
}