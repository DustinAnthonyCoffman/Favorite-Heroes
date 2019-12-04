/*
"<%= hero.results[0].image.url %>" alt=" <=%hero.results[0].name %>"


CAROSEL FOR THE FAVHEROS EJS
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://i.imgur.com/AZ5109Z.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/2TArVgs.png" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/jPkyCHz.png" alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

hero aliases

<ul> <b>Aliases</b><% hero.results[0].biography.aliases.forEach(function(s) { %>
                        <li> <%= s %> </li>   

    <% }) %> 
</ul>


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


      <img class="frame" src="<%= hero.image %>" alt="<=% hero.name %>">

//     let userId =  req.session.passport.user;

*/