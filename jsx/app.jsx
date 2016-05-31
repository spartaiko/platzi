var app = angular.module('app', ['react']);

var Usuario = React.createClass ({
    propTypes: {
        nombre : React.PropTypes.string.isRequired,
        apellido : React.PropTypes.string.isRequired
    },
    render: function() {
        return <span>Hola {this.props.nombre} {this.props.apellido}</span>;
    }    
});

var User_ctrl = function(){
    this.usuario = {
        nombre : 'Concha',
        apellido : 'Tu Madre'
    }
}
app.controller( 'user_ctrl', User_ctrl);

app.directive( 'usuario', function(reactDirective){
    return reactDirective(Usuario);
});