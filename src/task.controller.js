import Task from './../models/Task';
import { getPagination } from './../libs/getPagination'

export const findAllTasks = async (req, res) => {
    try {

        const {  } = req.query

        getPagination();

        const tasks = await Task.paginate({}, { offset: , limit: });
        res.json(tasks);
        //res.send('Tasks');
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the tasks'
        });
    }
};
//const tasks = await Task.find();
//http://localhost:3000/api/tasks?limit=2&page=10

export const createTask = async (req, res) => {

    if (!req.body.title) {

        return res.status(400).send({ message: 'Content cannot be empty' });

    }


    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        }); //Crea un objeto
        const taskSaved = await newTask.save(); //Guarda el objeto en la base de datos
        res.json(taskSaved);
        //console.log(req.body);
        //console.log(newTask);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating a task'
        });
    }


};


export const findOneTask = async (req, res) => {

    const { id } = req.params;

    try {

        const task = await Task.findById(id);

        if (!task)
            return res
                .status(404)
                .json({ message: `Task with id ${id} does not exists` });

        res.json(task);


        
        //console.log(req.params.id);
        //throw new Error('My Error');
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error Retrieving Task with id: ${id}`
        });
    }

};


export const deleteTask = async (req, res) => {

    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.json({
            message: 'Task Were Deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: `Cannot Delete task with id: ${id}`
        });
    }

};


export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);



    //res.send('Tasks');
};


export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    });
    res.json({ message: 'Task Was Updated Successfully' });
};