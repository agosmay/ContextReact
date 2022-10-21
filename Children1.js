import React , { useState, useContext } from 'react';
import { ContextoFuncion } from './ContextoFuncion'


export const Children1 = () => {
	
		const {data, datos} = useContext(ContextoFuncion)
	
 return (
	<>
		<h1> Soy el children1 </h1>
		<h3>Esta es la {data}</h3>
		<h4> Datos numericos {datos} </h4>

	</>
 
 
 );
	
	
}