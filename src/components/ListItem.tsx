type ListItemProps = {
    description: string;
}

const ListItem: React.FC<ListItemProps> = ({ description }) => {
    return (
        <div style={{border: '1px solid black',
                     backgroundColor: "azure",
                     borderRadius: 15,
                     margin: 10}}>
            <div style={{display:"inline-block",
                        verticalAlign:"middle",}}>
                <input type="checkbox" style={{verticalAlign: "text-bottom"}}></input>
                <h2 style={{color: 'slategray',
                            display:"inline-block",
                            verticalAlign:"middle"}}>{description}</h2>
            </div>
            
        </div>
    )
}

export default ListItem;