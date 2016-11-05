// Copyright (c) 2016 Walter Bender
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the The GNU Affero General Public
// License as published by the Free Software Foundation; either
// version 3 of the License, or (at your option) any later version.
//
// You should have received a copy of the GNU Affero General Public
// License along with this library; if not, write to the Free Software
// Foundation, 51 Franklin Street, Suite 500 Boston, MA 02110-1335 USA
//

const NUMBERBLOCKDEFAULT = 4;

const DEFAULTPALETTE = 'rhythm';

// We don't include 'extras' since we want to be able to delete
// plugins from the extras palette.
BUILTINPALETTES = ['rhythm', 'pitch', 'tone', 'intervals', 'drum', 'flow', 'action', 'boxes', 'widgets', 'turtle', 'pen', 'number', 'boolean', 'media', 'sensors', 'heap', 'extras'];

const BUILTINPALETTESFORL23N = [_('ritmo'), _('tono'), _('tono'), _('intervalos'), _('tambor'), _('flujo'), _('acción'), _('cajas'), _('aparatos'), _('tortuga'), _('pluma'), _('número'), _('booleano'), _('medios'), _('sensores'), _('pila'), _('extras')];


function getMainToolbarButtonNames(name) {
    return (['fast', 'slow', 'slow-music', 'step', 'step-music', 'stop-turtle', 'clear', 'palette', 'hide-blocks', 'collapse-blocks', 'go-home', 'help'].indexOf(name) > -1);
};


function getAuxToolbarButtonNames(name) {
    return (['planet', 'open', 'save', 'lilypond', 'paste-disabled', 'Cartesian', 'polar', 'utility', 'empty-trash', 'restore-trash'].indexOf(name) > -1);
}


function createDefaultStack() {
    DATAOBJS =
        [[0, 'start', 800, 75, [null, 1, null]],

         [1, 'newnote', 0, 0, [0, 2, 5, 9]],
         [2, 'divide', 0, 0, [1, 3, 4]],
         [3, ['number', {'value': 1}], 0, 0, [2]],
         [4, ['number', {'value': 4}], 0, 0, [2]],
         [5, 'vspace', 0, 0, [1, 6]],
         [6, 'pitch', 0, 0, [5, 7, 8, null]],
         [7, ['solfege', {'value': 'sol'}], 0, 0, [6]],
         [8, ['number', {'value': 4}], 0, 0, [6]],
         [9, 'hidden', 0, 0, [1, 10]],

         [10, 'newnote', 0, 0, [9, 11, 14, 18]],
         [11, 'divide', 0, 0, [10, 12, 13]],
         [12, ['number', {'value': 1}], 0, 0, [11]],
         [13, ['number', {'value': 4}], 0, 0, [11]],
         [14, 'vspace', 0, 0, [10, 15]],
         [15, 'pitch', 0, 0, [14, 16, 17, null]],
         [16, ['solfege', {'value': 'mi'}], 0, 0, [15]],
         [17, ['number', {'value': 4}], 0, 0, [15]],
         [18, 'hidden', 0, 0, [10, 19]],

         [19, 'newnote', 0, 0, [18, 20, 23, 27]],
         [20, 'divide', 0, 0, [19, 21, 22]],
         [21, ['number', {'value': 1}], 0, 0, [20]],
         [22, ['number', {'value': 2}], 0, 0, [20]],
         [23, 'vspace', 0, 0, [19, 24]],
         [24, 'pitch', 0, 0, [23, 25, 26, null]],
         [25, ['solfege', {'value': 'sol'}], 0, 0, [24]],
         [26, ['number', {'value': 4}], 0, 0, [24]],
         [27, 'hidden', 0, 0, [19, null]]
        ];
    /*
    DATAOBJS =
        [[0, 'start', 250, 100, [null, null, null]],
         [1, 'matrix', 800, 100, [null, 2, 23]],

         [2, 'pitch', 0, 0, [1, 3, 4, 5]],
         [3, ['solfege', {value:'ti'}], 0, 0, [2]],
         [4, ['number', {value:'4'}], 0, 0, [2]],

         [5, 'pitch', 0, 0, [2, 6, 7, 8]],
         [6, ['solfege', {value:'la'}], 0, 0, [5]],
         [7, ['number', {value:'4'}], 0, 0, [5]],

         [8, 'pitch', 0, 0, [5, 9, 10, 11]],
         [9, ['solfege', {value:'sol'}], 0, 0, [8]],
         [10, ['number', {value:'4'}], 0, 0, [8]],

         [11, 'pitch', 0, 0, [8, 12, 13, 14]],
         [12, ['solfege', {value:'mi'}], 0, 0, [11]],
         [13, ['number', {value:'4'}], 0, 0, [11]],

         [14, 'pitch', 0, 0, [11, 15, 16, 17]],
         [15, ['solfege', {value:'re'}], 0, 0, [14]],
         [16, ['number', {value:'4'}], 0, 0, [14]],

         [17, "rhythm", 0, 0, [14, 18, 19, 20]],
         [18, ["number", {"value":6}], 0, 0, [17]],
         [19, ["number", {"value":4}], 0, 0, [17]],

         [20, "rhythm", 0, 0, [17, 21, 22, null]],
         [21, ["number", {"value":1}], 0, 0, [20]],
         [22, ["number", {"value":2}], 0, 0, [20]],

         [23, "hiddennoflow", 0, 0, [1, null]]
        ];
   */
};


function createHelpContent() {
    HELPCONTENT = [
        [_('Bienvenido a Bloques de Música'), _('Bloques de Música es una colección de herramientas de manipulación para explorar conceptos musicales fundamentales de una manera integradora y divertido.'), 'activity/activity-icon-mouse-color.svg'],
        [_('Conoce Sr. Ratón'), _('Sr. Ratón es nuestro conductor de bloques de música.') + ' ' + _('Sr. Ratón le anima a explorar los Bloques Musicales.') + ' ' + _('Vamos a empezar nuestro recorrido.'), 'activity/activity-icon-mouse-color.svg'],
        //.TRANS: Please add commas to list: Matrix, Notes, Tone, Turtle, and more.
        [_('Botones de paleta'), _('Esta barra de herramientas contiene los botones de la paleta de Matrix, Notas, Tono, Tortuga, y más.') + ' ' + _('Haga clic para mostrar las paletas de bloques y bloques de arrastre de las gamas de colores en el lienzo para usarlos.'), 'images/icons.svg'],
        [_('Ejecutar rápidamente'), _('Haga clic para ejecutar el proyecto en modo rápido.'), 'header-icons/fast-button.svg'],
        [_('Ejecutar lentamente'), _('Haz click para ejecutar el proyecto en modo lento.'), 'header-icons/slow-button.svg'],
        [_('Música ejecute lentamente'), _('Haga clic para ejecutar sólo la música en modo lento.'), 'header-icons/slow-music-button.svg'],
        [_('Ejecutar paso a paso'), _('Haz click para ejecutar el proyecto en modo paso a paso.'), 'header-icons/step-button.svg'],
        [_('Reproducir nota a nota'), _('Haga clic para reproducir nota a nota.'), 'header-icons/step-music-button.svg'],
        [_('Detener'), _('Detener la música (y las tortugas).'), 'header-icons/stop-turtle-button.svg'],
        [_('Limpiar'), _('Borrar la pantalla y volver a las tortugas a sus posiciones iniciales.'), 'header-icons/clear-button.svg'],
        [_('Mostrar u ocultar las paletas'), _('Ocultar o mostrar las paletas de bloques.'), 'header-icons/palette-button.svg'],
        [_('Mostrar u ocultar los bloques.'), _('Ocultar o mostrar los bloques y las paletas.'), 'header-icons/hide-blocks-button.svg'],
        [_('Expandir o colapsar los bloques colapsables\t'), _('Expandir o colapsar los bloques colapsables, cómo por ejemplo los bloques de empezar y los de acción.'), 'header-icons/collapse-blocks-button.svg'],
        [_('Casa'), _('Devolver todos los bloques para el centro de la pantalla.'), 'header-icons/go-home-button.svg'],
        [_('Ayuda'), _('Mostrar estos mensajes.'), 'header-icons/help-button.svg'],
        [_('Expandir/colapsar la barra de opciones.'), _('Haz click en este botón para expandir o colapsar la barra de herramientas auxiliar.'), 'header-icons/menu-button.svg'],
        [_('Cargar ejemplos desde el servidor'), _('Este botón abre la pantalla de carga de proyectos de ejemplo.'), 'header-icons/planet-button.svg'],
        [_('Cargar proyecto de archivos'), _('También puede cargar proyectos desde el sistema de archivos.'), 'header-icons/open-button.svg'],
        [_('Guardar proyecto'), _('Guarde proyecto en archivo'), 'header-icons/save-button.svg'],
        [_('Ahorre partituras'), _('Guarde el proyecto como un archivo de LilyPond.'), 'header-icons/lilypond-button.svg'],
        [_('Copiar'), _('Para copiar una pila en el portapapeles, hacer un \"pulsación larga \" en la pila.') + ' ' + _('El botón de pegar destacará.'), 'header-icons/paste-button.svg'],
        [_('Pegar'), _('El botón de pegar está activo, por lo tanto hay bloques copiados en el portapapeles.'), 'header-icons/paste-disabled-button.svg'],
        [_('Guardar pila'), _('El bot�n de guardar-pila guarda una pila sobre una paleta personalizada.') + ' ' + _('Aparece despu�s de una pulsaci�n larga en una pila.'), 'header-icons/save-blocks-button.svg'],
        [_('Cartesiano'), _('Mostrar u ocultar cuadrícula en coordenadas cartesianas.'), 'header-icons/Cartesian-button.svg'],
        [_('Polar'), _('Mostrar u ocultar la rejilla de coordenadas polares.'), 'header-icons/polar-button.svg'],
        [_('Configuración'), _('Abre el panel para configurar Bloques de Música.'), 'header-icons/utility-button.svg'],
        [_('Disminuir el tamaño de los bloques'), _('Disminuye el tamaño de los bloques'), 'header-icons/smaller-button.svg'],
        [_('Incrementar tamaño de bloques'), _('Incrementa el tamaño de los bloques.'), 'header-icons/bigger-button.svg'],
        [_('Analizar'), _('Analizar los tipos de bloques usados.'), 'header-icons/stats-button.svg'],
        [_('Cargar plugin desde archivo'), _('Tu puedes cargar nuevos bloques desde un archivo.'), 'header-icons/plugins-button.svg'],
        [_('Activar scroll'), _('Puedes mover los bloques por el área de trabajo'), 'header-icons/scroll-unlock-button.svg'],
        [_('Borrar todo'), _('Eliminar todo el contenido del canvas, incluyendo los bloques.'), 'header-icons/empty-trash-button.svg'],
        [_('Deshacer'), _('Restaurar bloques de la papelera.'), 'header-icons/restore-trash-button.svg'],
        [_('Felicitaciones.'), _('Ha terminado la gira. Por favor, disfrutar de Bloques de Música!'), 'activity/activity-icon-mouse-color.svg']
    ];
};

