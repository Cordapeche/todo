var bodyParser = require ('body-parser');

var data = [{item: 'get pencils'}, {item: 'Take the trashes out'},{item: 'Do arts'}];
var urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
});

app.post('/todo', urlencoderParser, function(req, res){
data.push(req.body); 
res.jason(data)
}); 

app.delete('/todo', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);

});


}