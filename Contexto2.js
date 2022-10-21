import React , { useState } from 'react';
import { ContextoFuncion } from './ContextoFuncion'
import { Children1 } from './Children1'
import { Children2 } from './Children2'

export const Contexto2 = () => {
	
	const [data , setData]= useState('data nueva')
const datos = 'Hello World'
const [datera, setDatera] = useState("Yes")
	
	return (
		<>
			<ContextoFuncion.Provider
			value={{
				data : data,
				datos : datos,
				datera : datera,
				
			}}
			>
			<Children1 />
			<Children2 />
			</ContextoFuncion.Provider>
			
		</>
	
	);
}