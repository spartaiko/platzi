var Usuario = React.createClass ({
    propTypes: {
        nombres : React.PropTypes.string.isRequired,
        apellido : React.PropTypes.string.isRequired
    },
    render: function() {
        return <span>Hola {this.props.nombre} {this.props.apellido}</span>
    }    
});

var app = angular.module('app', ['react']);

var User_ctrl = function(){
    this.usuario = {
        nombre : 'Chuck',
        apellido : 'Norris'
    }
}
app.controller( 'user_ctrl', User_ctrl);

app.directive( 'usuario', function(reactDirective){
    return reactDirective(Usuario);
})