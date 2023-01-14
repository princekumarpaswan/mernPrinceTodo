import { useState, useEffect } from "react"
import "../home/css/todo.css";

// getting the locol data

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if (lists) {
        return JSON.parse(lists)
    } else {
        return [];
    }

}
const Todo = ({ serchData, Btn }) => {


    const [inputData, setInputData] = useState("");
    const [inputDataTask, setInputDataTask] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setEdititem] = useState("");
    const [toggleBtn, setToggeBtn] = useState(false);
    // const [sfun, setFun] = useState('')

    // setFun(Btn)

    let splitTask = []



    console.log(Btn);
    function serch() {
        if (Btn === false) {
            if (serchData === "") {
                items.map((e) => {
                    const y = e.id
                    document.getElementById(y).style.backgroundColor = ' rgba(29, 78, 216)'
                    return console.log(y);
                })
            }
        } else {
            items.filter((val) => {
                if (val.name.toLowerCase().includes(serchData.toLowerCase())) {
                    const rid = val.id
                    document.getElementById(rid).style.backgroundColor = '#1FAA59';

                } return console.log(val);
            })
        }
    }








    function taskFormation() {

        splitTask = inputDataTask.split(",");

        setInputDataTask("");


    }



    const addItem = () => {





        taskFormation()
        if (!inputData) {
            alert("please fill the data")
        }
        else if (inputData && toggleBtn) {
            setItems(
                items.map((e) => {
                    if (e.id === isEditItem) {
                        return { ...e, name: inputData, task: splitTask }

                    } else {
                        return e;
                    }
                })
            )
            setInputData([])
            setEdititem(null);
            setToggeBtn(false)
        }

        else {

            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
                task: splitTask,
            }
            setItems([...items, myNewInputData]);
            setInputData("");

        }

    }

    // edit item button 

    const editItems = (index) => {

        const item_todo_edited = items.find((element) => {
            return element.id === index;
        });

        setInputData(item_todo_edited.name)
        setInputDataTask(item_todo_edited.task)
        setEdititem(index);
        setToggeBtn(true)

    }



    // deleting the Item
    const deleteItem = (id) => {
        const updatedItem = items.filter((e) => {
            return e.id !== id;
        })
        setItems(updatedItem)
    }

    // removing All the elements
    const removeAll = () => {
        setItems([])
    }

    // adding local storage
    // serch()
    // useEffect(() => {
    // serch()
    // }, [])

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))

    }, [items])



    return (
        <>

            <>

                <div className="main-div" >

                    <div className="child-div" >
                        <button className="sx" onClick={() => serch()}>serch</button>
                        <figure>
                            <figcaption>Add Your Todo Here 🤞</figcaption>
                        </figure>
                        <div className="addItems">


                            <input type="text" placeholder="📒 Add Todo"
                                className="form-control input" value={inputData} onChange={(e) => { setInputData(e.target.value) }} />

                            {/* 
                        {
                            toggleBtn ? (<i className="far fa-edit" aria-hidden="true" onClick={addItem} ></i>) :
                                (<i className="fa fa-plus" aria-hidden="true" onClick={addItem} ></i>)
                        } */}
                            <textarea type="text" placeholder="📝 Add Task (added coma after ever task)"
                                className="form-control input inputTodo" value={inputDataTask} onChange={(e) => { setInputDataTask(e.target.value) }} />


                        </div>
                        <button onClick={addItem} className="addTodobtn" >Add Todo</button>
                        {/* show our Items */}
                        <div className="showItems" >
                            {
                                items.map((element, index) => {
                                    const taskE = element.task


                                    return (
                                        <div className="eachItem" key={index} id={element.id} >
                                            <h3> <span className="todoBorder"><span className="titleTodo"  >Todo :-</span> {element.name} </span> <br />
                                                <span className="titleTask">Task :- <br />

                                                    {
                                                        taskE.map((er) => {
                                                            return (
                                                                <>
                                                                    <span className="task" style={{ marginLeft: "150px" }} index={index}># {er}</span><br />

                                                                </>

                                                            )

                                                        })

                                                    }

                                                </span>
                                            </h3>
                                            <div className="todo-Btn">
                                                <i className="far fa-edit" aria-hidden="true"
                                                    onClick={() => { editItems(element.id) }} ></i>


                                                <i className="far fa-trash-alt" aria-hidden="true"
                                                    onClick={() => { deleteItem(element.id) }} ></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }




                        </div>



                        {/* Remove all button */}
                        <div className="showItems" >
                            <button className="Btn effect04" data-sm-link-text="Remove All" onClick={removeAll} >
                                <span>CHECK LIST</span>
                            </button>
                        </div>

                    </div>

                </div>
            </>

        </>
    )
}

export default Todo