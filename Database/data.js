var STATUSENUMS={
    ACTIVE : "ACTIVE",
    COMPLETE : "COMPLETE",
    DELETE :  "DELETE"
};

var todos={
    1: {Title : "Interactive js" , Status : STATUSENUMS.ACTIVE},
    2: {Title : "Interactive git" , Status: STATUSENUMS.ACTIVE},
    3 :{Title : "Interactive CSS" , Status : STATUSENUMS.DELETE},
    4 : {Title : "C++", Status : STATUSENUMS.COMPLETE}

};

var next_todo = 5;

module.exports={
    STATUSENUMS : STATUSENUMS,
    todos : todos,
    next_todo : next_todo
};


