function Toast({ status, text }) {
    return (
        <div className="toast toast-top toast-end">
            <div className={`alert alert-${status}`}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Toast