type IsListEmptyProp = {
    isEmpty: Boolean; 
}

const DisplayEmpty: React.FC<IsListEmptyProp> = ({ isEmpty }) => {
    if (!isEmpty) return null
    return (
        <div>Nothing to do!</div>
    )
}

export default DisplayEmpty;