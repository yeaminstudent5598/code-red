import React from 'react'

export default function ModalofPost() {
    return (
        <div
            onClick={() => document.getElementById('my_modal_4').showModal()}
            className="postSection border border-black w-full p-2 rounded-xl">
            <div className="">
                Post your learning or questions here
            </div>
            {/* Modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
