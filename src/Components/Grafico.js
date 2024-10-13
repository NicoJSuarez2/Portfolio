import React from 'react';
import parse from 'html-react-parser';

const Grafico = () => {
    return (
        <div>
            <h2>Gráfico HTML</h2>
            <iframe 
                src="URL_DEL_GRAFICO" 
                width="600" 
                height="400" 
                title="Gráfico"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default Grafico;