'use strict';

var app = angular.module('app', ['react']);

var Usuario = React.createClass({
    displayName: 'Usuario',

    propTypes: {
        nombre: React.PropTypes.string.isRequired,
        apellido: React.PropTypes.string.isRequired
    },
    render: function render() {
        return React.createElement(
            'span',
            null,
            'Hola ',
            this.props.nombre,
            ' ',
            this.props.apellido
        );
    }
});

var User_ctrl = function User_ctrl() {
    this.usuario = {
        nombre: 'Concha',
        apellido: 'Tu Madre'
    };
};
app.controller('user_ctrl', User_ctrl);

app.directive('usuario', function (reactDirective) {
    return reactDirective(Usuario);
});