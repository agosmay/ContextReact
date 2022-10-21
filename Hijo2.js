import React , { useContext } from 'react';
import { Hijo3 } from './Hijo3'
import { ContextoComision } from './ContextoComision'

export const Hijo2 = () => {
	const { numero } = useContext(ContextoComision)

	
	return (
		<>
			<div>2</div>
			<h3>Comision {numero}</h3>
			<Hijo3 />
			
		</>
	);
	
}