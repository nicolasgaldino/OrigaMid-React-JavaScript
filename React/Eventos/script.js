// Eventos
// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).
const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
// https://reactjs.org/docs/events.html
//-----------------------------------------------------------------------------------
// Função anônima
// É possível executar uma função anônima no evento.
const App = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle('ativa')}>
      Ativar
    </button>
  );
};
// Guardar o estado do DOM não é o mais indicado, veremos mais tarde como fazer isso com Hooks.
//-----------------------------------------------------------------------------------
// Window / Document
// Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.
const App = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};
// Esse tipo de evento será adicionado com o hook useEffect