import React from 'react';
import { connect } from 'react-redux';
import store from '../store'



const Cosa = ({valor, incrementar, texto, escribir}) => (

    
    
    <section>
        <h2 id="counter"> </h2>
        <h2 id="texto"> </h2>
        <h1>{valor}</h1>
        <button onClick={ () => (incrementar())}>incrementar</button><br />
        
        <h1>{texto }</h1><br />
        <button onClick={() => (escribir())}>poner</button><br />
        
    </section>

)

// const unsubscribe = 
store.subscribe(() => {
    // vemos el nuevo store
    const txt = document.getElementById("counter");
    const xtx = document.getElementById("texto");
    txt.innerHTML = (store.getState().counter);
    xtx.innerHTML = (store.getState().texto);
    console.log(store.getState())
    
    // nos desuscribimos
   // unsubscribe();
});

const mapStateToProps = state => ({
    valor: state.counter,
    texto: state.texto
    
});

const mapDispatchToProps = dispatch => ({
    incrementar() {
        dispatch({
            type: "INCREMENT",
        })
    },
    escribir() {
        dispatch({
            type: "ESCRIBIR",
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps) (Cosa)