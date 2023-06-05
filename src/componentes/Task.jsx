export const Task = (props) => {
    const { name, onCheckTimeClick } = props;

    const handleClick = () => {
        console.log(`Tarea ${name} pendiente`);
        onCheckTimeClick(name);

    }
    return (
        
            <article>
                <input type="checkbox" />{name}
                <button className= "button" onClick={handleClick}>Chequear pendientes</button>
            </article>
        
    );   
}