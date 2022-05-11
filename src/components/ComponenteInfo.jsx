import React from 'react';
const noticia = {
	"titulo":"este es mi titulo",
	"descripcion":"este es mi descripcion"
} 

function CoponenteInfo (){
const {titulo,descripcion} = noticia;

	return(

		<div>
			<h1>informatorio chaco 2022</h1>
			<p>{titulo}</p>
			<p>{descripcion}</p>			
		</div>
		)
}

export default  CoponenteInfo;