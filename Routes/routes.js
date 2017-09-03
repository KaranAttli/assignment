var database = require(__dirname + '/../Database/data.js')

module.exports = function (app) {


    app.get('/delete',function (req,res) {
        console.log("deleted received");
        var obj = {};

        for(var p in database.todos){
            if(database.todos[p].Status==database.STATUSENUMS.DELETE){
                obj[p] = database.todos[p];
            }
        }

        res.json(obj).status(200);


    })


    app.delete('/:id',function (req,res) {

        database.todos[req.params.id].Status=database.STATUSENUMS.DELETE;
        res.json().status(200);
    });


    app.post('/',function (req,res) {

        console.log(req.body.task);
        var obj = {
            Title : req.body.task,
            Status : database.STATUSENUMS.ACTIVE
        };
        database.todos[database.next_todo++]=obj;
        res.json().status(200);


    });





    //get complete todos

    app.get('/completetodo',function (req,res) {

        var obj = {};
        console.log("complete");
        for(var p in database.todos){
            if(database.todos[p].Status == database.STATUSENUMS.COMPLETE){
                obj[p]=database.todos[p];
            }
        }
        console.log(obj);
        res.json(obj).status(200);



    });




    app.put('/makeActive/:id',function (req,res) {

        database.todos[req.params.id].Status = database.STATUSENUMS.ACTIVE;
        res.json().status(200);


    });




    //route to change status to complete
    app.put('/changecomplete/:id',function (req,res) {

            database.todos[req.params.id].Status = database.STATUSENUMS.COMPLETE;
            res.json().status(200);
    });





    app.get('/',function (req,res) {
        res.render('homepage.ejs');
    })

    app.get('/active',function (req,res) {

        var obj ={}
        for(var p in database.todos){
            if(database.todos[p].Status==database.STATUSENUMS.ACTIVE){
                obj[p] = database.todos[p];
            }
        }
        res.send(obj).status(200);

    });
    
}