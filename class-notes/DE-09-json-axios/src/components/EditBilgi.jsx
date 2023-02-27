import axios from "axios";

const EditTutorial = ({ editModal, setEditmodal, getBilgiler }) => {
    //! veriler editModal={id:id,title:title,desription:description} formatıyla buraya geldiği için destructuring yapmayı tercih ettim. buraya babadan gelen değiştirebilme yeteneği sayesinde inputlara girilen verileri eskisiyle değiştirdim, (altta açıklama var)
    const { id, title, description } = editModal;
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    //! sonra save butonuna basınca  putBilgi (put) fonksiyonu sayesinde değişiklik tamamlandı
    const putBilgi = async (editVeri) => {
        // console.log(editVeri);
        await axios.put(`${url}${editVeri.id}/`, editVeri);
        getBilgiler();
    };
    //!! tabindex="-1"bu, öğeye klavye navigasyonuyla erişilemediği, ancak JS'deki odak işlevi kullanılarak odaklanılabileceği anlamına gelir.
    return (
        <div className="modal " tabIndex="-1" id="edit-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter your title"
                                //! value={title || ""} bu yazım olmazsa console da kontrolsüz giriş diye warning veriyor. title gelmezse de sıkıntı yapma diyoruz
                                value={title || ""}
                                onChange={(e) =>
                                    setEditmodal({ ...editModal, title: e.target.value })
                                }
                                //! setEditmodal ile (değiştirme yeteneğiyle) '...editModal' veri objemin sadece title ı değişsin, gerisi aynen kalsın
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="desc"
                                placeholder="Enter your Description"
                                value={description || ""}
                                onChange={(e) =>
                                    setEditmodal({ ...editModal, description: e.target.value })
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() =>
                                putBilgi(editModal)
                            }
                        //! save butonuna tıklayınca putBilgi fonksiyonuna yeni güncel editModal gitsin
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTutorial;
