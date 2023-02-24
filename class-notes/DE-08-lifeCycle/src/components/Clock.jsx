// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);

import React, { useEffect, useState } from "react";
import moment from "moment";
const Clock = () => {
    const [zaman, setZaman] = useState(moment());
    const [count, setCount] = useState(0);
    //!comppnentDidMount=ilk render da çalış birdaha burayı görme
    useEffect(() => {
        const time = setInterval(() => {
            setZaman(moment());
            console.log("merhaba");
        }, 1000);

        //!component kapandığında yada başka sayfaya gidildiğinde çalışma dursun istersek
        return () => {
            clearInterval(time);
            console.log("başka sayfaya gidildiği için interval öldü");
        };
    }, []);
    //!count değişkeni her güncellendiğinde alttakiler olsun
    useEffect(() => {
        console.log("count değişti");


    }, [count])


    return (
        <div>
            {zaman.format("HH")}

            {zaman.format("ss") % 2 === 0 ? ":" : " "}

            {zaman.format("mm")}

            {zaman.format("ss") % 2 === 0 ? ":" : " "}

            {zaman.format("ss")}

            <div className="bg-secondary">
                <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
                    ARTTIR
                </button>
                <h1>{count}</h1>
            </div>
        </div>
    );
};

export default Clock;
