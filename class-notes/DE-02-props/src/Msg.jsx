

// const Msg = (props) => {
//  console.log(props);
//  const{isim,telefon}=props;
//   return (
//     <div>
//      <h1>Hello I am {isim}</h1>
//      <h4>telefon numaram {telefon}</h4>
//     </div>
//   )
// }

// export default Msg


//!2.yol
const Msg = ({isim,telefon}) => {
 
  return (
    <div>
   
     <h1>Hello I am {isim}</h1>
     <h4>telefon numaram {telefon}</h4>
    </div>
  )
}

export default Msg