import React from 'react'

const App2 = () => {
  return <div>App2</div>
}

export default App2


// rafce

// // Arrow Function 
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação do Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCaseCorcundaDoCamelo

// export default, possa importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header />

//  element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   box-sizing: content-box;
//   width: 500px;
// }

//  Nomeação de classes em css
//  Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento
// bloco__elemento--modificador
// header
// header__link
// header__link--small

// Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

// {items === 5 ? (
//   <>
//    <SingleItem /> 
//    <SingleItem /> 
//    <SingleItem /> 
//    <SingleItem /> 
//    <SingleItem /> 
//   </>
//    ) :  (
//   <>
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//   </>
//  )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} item={items[index]} />
//    ))}

// Spread operator
// ...