import React from 'react';

function Tag (props) {
    // récupération du tag dans la props et renvoie de celui ci dans une balise p contenue dans une div
    const {dataTag} = props;
    
    return (
        <div className='tag'>
            <p className='tag-text'>{dataTag}</p>
        </div>
    );
};

export default Tag;