import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditBilgi from "./EditBilgi";
import axios from "axios";
import { useState } from "react";

const BilgiList = ({ bilgiler, getBilgiler }) => {
    //!babadan gelen bütün bilgiler dizisi ekrana bastırıldı
    //! deleteBilgi fonksiyonu, alttaki çöp iconuna basılınca basıldığı yerdeki id si ile çalıştı
    const [editModal, setEditmodal] = useState("");
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    const deleteBilgi = async (id) => {
        await axios.delete(`${url}${id}/`);
        getBilgiler();
    };

    //! burada kalem iconuna basılınca ekrandaki tüm veriler torundaki (modal ın içinde) ekranda çıkmalı, üstelik ben o verileri değiştirebilmeliyim, bu yüzden hem buradaki veriler hem değiştirebilme yeteneği için useState tanımlayıp, (kalem iconuna tıklamamla ) verilerimi ona gömüp, gerekli işlemlerin yapılacağı modal a yani torun a yolladım, orada veriler gözükecek ben değişiklik yapabileceğim, save butonuna basınca değişiklik put fonksiyonu ile dataabase e gidecek, bu yüzden   verileri gömdüğüm editModal i ve değiştirebilme yeteneğini (setEditModal) child a (EditModal a) yolladım

    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bilgiler.map((eleman) => {
                        const { id, title, description } = eleman;
                        return (
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{title}</td>
                                <td>{description} </td>
                                <td className="text-center text-nowrap">
                                    <FaEdit
                                        // //! alttaki 2 satır bana tıklandığında modal ı aç demek
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-modal"
                                        size={20}
                                        className="me-2 text-warning cursor-pointer"
                                        type="button"
                                        //!  normalde filter la dizide gezin tıkladığımla id si tutanı bir diziye at diyebiliriz, böyle yapana kadar (ve jsx alanında filter çalışmaz zaten) bir değişkene yükleyip child a yolluyoruz
                                        onClick={() => setEditmodal(eleman)}
                                    />

                                    <AiFillDelete
                                        type="button"
                                        size={22}
                                        className="text-danger cursor-pointer"
                                        //!burada id göndermek zorunda değiliz title da gönderilebilir

                                        onClick={() => deleteBilgi(id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <EditBilgi
                editModal={editModal}
                setEditmodal={setEditmodal}
                getBilgiler={getBilgiler}
            />
            {/* editModal ve setEditmodal ı Edit e yolladık çünkü burada tıkladığım veri editModal sayesinde,
      orada value larda görünecek ve ben setEditmodal sayesinde değiştirebileceğim. EditModal daki put fonksiyonu sayesinde database de kalıcı değişiklik yapacağız, bunu ekranda da görebilmek için, veriler database den gelip bilgiler dizisini yeni haliyle güncellesin ve ekran güncellensin diye  getBilgiler fonksiyonunu da gönderdik*/}
        </div>
    );
};

export default BilgiList;
