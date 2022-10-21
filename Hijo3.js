import React , { useContext } from 'react';
import { ContextoComision } from './ContextoComision'


export const Hijo3 = () => {
	const { numero } = useContext(ContextoComision)

	
	return (
		<>
			<div>3</div>
			<h3>Comision {numero}</h3>
		</>
	);
	
}