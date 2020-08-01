import React from 'react';
import style from './recipe.module.css';

function Recipe({title, image, link}) {
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<a className="box" target="_blank" rel="noopener noreferrer" href={link}><img className={style.img} src={image} alt={title}/></a>
		</div>
	);
}

export default Recipe;