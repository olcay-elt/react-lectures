import React from 'react'

//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor)

class LifecycleMethods extends React.Component {
    constructor(props) {
        console.log("Constructor is running");
        super(props);
        this.state = {
            count: 0,
        };
    }

}


//! 2-) her oluşturmada çağrılır (Bileşeni DOM'a çizme)
render() {
    console.log("Component Rendered");
    return (
        <div className="container text-center mt-4">
            <h1 className="text-danger">LIFECYCLE METHODS</h1>
            <h3>COUNT={this.state.count}</h3>
            <button className="btn btn-info" onClick={this.handleInc}>
                INC
            </button>
        </div>
    );
}

//! 3-) component  monte edildiğinde çağrılır
//! (ilk renderdan hemen sonra).
//!  lifecycle döngüsünde yalnızca bir kez çağrılır
componentDidMount() {
    console.log("Component kuruldu");
}
export default LifeCyclesMethods