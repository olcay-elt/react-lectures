const EditTutorial = () => {
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
                                value=""
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
                                value=""
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
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
