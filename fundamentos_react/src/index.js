import React from 'react';
import ReactDOM  from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import { CompA, CompB } from './componentes/DoisComponentes'
// import FamilaSilva from './componentes/FamiliaSilva';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './Pai';
// import ComponeteClass from './componentes/ComponeteClass';
import Contador from './componentes/Contador';

const element = document.getElementById('root');

ReactDOM.render(
    <div>  
        <Contador numeroInicial={0} />

        {/* <ComponeteClass valor="" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* ************************** */}
        {/* <Familia sobrenome="Silva">
            <Membro nome="Ana" />
            <Membro nome="André" />
        </Familia> */}
        {/* ************************** */}
        {/* <FamilaSilva /> */}
        {/* ************************** */}
        {/* <CompA valor="valor 1" />
        <CompB valor="valor 2" /> */}
        {/* ************************* */}
        {/* <PrimeiroComponente valor="Ola mundo" /> */}

    </div>, 
    element
);


//************************ */
// ReactDOM.render(
//     <div>  
//         <CompA valor="valor 1" />
//         <CompB valor="valor 2" />
//     </div>, 
//     element
// );


//+++++++++++++++++++++++++++++++++++++
// ReactDOM.render(
//     <div>
//         <PrimeiroComponente valor="Ola mundo" />
//     </div>, 
//     element
// );