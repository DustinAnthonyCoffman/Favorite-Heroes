/*
"<%= hero.results[0].image.url %>" alt=" <=%hero.results[0].name %>"



    /deleteSkills/<%=idx%>?_method=DELETE"


  <img class="frame" src="<%= hero.results[0].image.url %>" alt=" <=%hero.results[0].name %>">


constMovie = require('../models/movie');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne
}
   <input id="<%=username%>" type="text" name="name" placeholder="Enter a superhero name"> 
    you could use this in the future ? ?  ??  ? ? 
function index(req, res) {
    Movie.find({}, function(err, movies) {
        res.status(200).json(movies);  //good request
    })
}
function show(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        if(err) return res.status(400).json(err); //return error code 400
        return res.status(200).json(movie);
    })

}
function create(req, res) {
    Movie.create(req.body, function(err, movie) {
        if(err) return res.status(400);
        return res.status(201).json(movie); //201 create status code
    })
}
function update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}), //the default value for the new option of findByIdAndUpdate (and findOneAndUpdate) has changed to false. This means that you need to explicitly set the option to true to get the new version of the doc.
    function(err, movie) {
        res.status(200).json(movie);
    }
}
function deleteOne(req, res) {
    Movie.findByIdAndDelete(req.params.id, function(err, movie) {
        res.status(200).json(movie);
    })
}




//     let userId =  req.session.passport.user;

*/