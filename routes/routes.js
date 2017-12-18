var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/api/profile/:pin", function(req, res) {
        var profile = {
            name: "MILO P COSGROVE",
            pin: req.params.pin,
            membershipCode: "L8V"
        };
        res.status(200).send(profile);
      });
  
}
  
module.exports = appRouter;