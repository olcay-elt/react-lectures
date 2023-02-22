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
        <div className='container text-center mt-4'>
            <h1>******************************************</h1>
            <h1>FORM (EVENTS)</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        USERNAME: <span className='text-danger fw-bold'>isim</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        PASSWORD
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                    />
                </div>

                <div>
                    <label htmlFor="username" className="form-label">
                        USERNAME: <span className='text-danger fw-bold'>isim</span>
                    </label>

                    <select className="form-select" aria-label="Default select example">
                        <option selected="">Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>




                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form