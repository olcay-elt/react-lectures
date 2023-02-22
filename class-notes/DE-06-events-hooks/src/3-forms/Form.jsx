import React from 'react'

// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.


const Form = () => {
    return (
        <div>
            <h1>******************************************</h1>
            <h1>FORM (EVENTS)</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form