import { useState } from "react";

type ListItemProps = {
    description: string;
    removeInput: Function
}

const ListItem: React.FC<ListItemProps> = ({ description, removeInput }) => {
    const [completed, setCompleted] = useState(false);

    return (
        <div className={completed ? 'item complete' : 'item'} 
             style={{border: '1px solid black',
                     backgroundColor: "azure",
                     borderRadius: 15,
                     margin: 10,
                     width: "500px"
                     }}>
                <h2 style={{color: 'slategray', 
                            textAlign: "center",
                            position: "relative"}}>
                    <input type="checkbox" 
                            onClick={() => {
                                if (completed) {
                                    setCompleted(false)
                                } else {
                                    setCompleted(true)
                                }
                                
                            }}
                            style={{float: "left",
                            marginRight: "-50%"}} 
                            />
                    {description}
                    <input type="image" src="src\assets\trash_icon.png" height="25px" width="25px"
                        style={{float: "right",
                        marginLeft: "-50%"}}
                        onClick={() => {
                            removeInput(description);}}/>
                </h2>
        </div>
    )
}

export default ListItem;