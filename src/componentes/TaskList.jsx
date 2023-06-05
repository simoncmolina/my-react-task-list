import { Task } from "./Task";
const TaskList = (props)=> {
    const { list } = props;
    const handleCheckTime = (taskName) => {
        console.log(`check time clicked from ${taskName}`);
    };
    return (
        <div>
            {
                list.map((movie) =>(
                    <Task name={movie.name} onCheckTimeClick= {handleCheckTime} /> 

                ) )
            }
            
        </div>
    )
}

export default TaskList;