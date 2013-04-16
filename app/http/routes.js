// HTTP Routes
routes = {
  site: require('./controllers/site'),
  user: require('./controllers/user')
};

module.exports = function(http){
    http.get('/', routes.site.index);
    http.get('/signin', routes.site.signin);
    http.get('/js/sso.js', routes.site.sso);
    http.get('/ajax/forms/new_user.html', routes.user.userForm);
    
    http.post('/user/create', routes.user.create);
    http.put('/user/:id/update', routes.user.update);
    http.get('/user/:id/profile', routes.user.get);
    http.del('/user/:id/delete', routes.user.del);
    // http.put('/user/:id/suspend', routes.user.suspend);

    // delete this as soon as we hit prod, PLEASE!!
    http.get('/dev/delete', routes.user.devDelete);
};
