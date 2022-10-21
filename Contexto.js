import React , { useState } from 'react';
import { Hijo1 } from './Hijo1'
import { Hijo4 } from './Hijo4'
import { ContextoComision } from './ContextoComision'

export const Contexto = () => {
	
	const [comision, setComision]=useState('22806')
	const [dato, setDato] = useState("String vacia")
	
	
	return (
		<>
			<ContextoComision.Provider 
			value= {{
					numero : comision,
					setDato,
					dato,
					
			}}
			>
			<Hijo1 />
			<Hijo4 />
			</ContextoComision.Provider>
			
		</>
	);
	
}