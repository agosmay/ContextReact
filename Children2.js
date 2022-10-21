import React , { useState, useContext } from 'react';
import { ContextoFuncion } from './ContextoFuncion'


export const Children2 = () => {
	
	const {data, datos, datera} = useContext(ContextoFuncion)
	
 return (
	<>
		<h1> Soy el children2 </h1>
		<h3>Esta es la {data}</h3>
		<h4> Datos numericos {datos} </h4>
		<h2>{datera}</h2>
	</>
 
 
 );
	
	
}