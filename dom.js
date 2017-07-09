
/**
 * removeAllSpans -  функция, которая удаляет все элементы span со страницы
 */

function removeAllSpans (span) {
    var element = document.getElementsByTagName('span');
    var i;

    for (i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
}

removeAllSpans();

/**
 * firstChild -  функция, которая будет кроссбразурено возвращать firstChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function firstChild (parent) {
    var node = parent.firstChild;

    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.nextSibling;
        console.log('firstChild', node);
    }

    return node;
}

firstChild(document.querySelector('div'));


/**
 * lastChild -  функция, будет кроссбраузерно возвращать lastChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function lastChild (parent) {
    var node = parent.lastChild;

    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.previousSibling;
        console.log('lastChild', node);
    }

    return node;
}

lastChild(document.querySelector('div'));


/**
 * next -  функция, которая будет кроссбраузерно возвращать следующий элемент
 * (не текстовую ноду, работа наподобие next() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function next (node) {
    var node = node.nextSibling;

    while (node.nodeType === 3 || node.nodeType === 8 ) {
        node = node.nextSibling;

        console.log('nextSibling', node);
    }

    return node;
}

next(document.querySelector("div"));

/**
 * prev -  функция, которая будет кроссбраузерно возвращать предыдущий элемент
 * (не текстовую ноду, работа наподобие prev() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function prev (node) {
    var node = node.previousSibling;

    while (node.nodeType === 3 || node.nodeType === 8 ){
        node = node.previousSibling;

        console.log('previousSibling', node);
    }

    return node;
}

prev(document.querySelector("article"));


//=================================================================================

/**
 * OPTIONAL
 * closest -  функция, которая будет идти вверх по DOM (по родительским елементам) от переданного ей элемента в первом
 * аргументе пока не найдет элемент переданный во втором аргументе в эту функцию и вернёт этот элемент (то есть второй).
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 *
 * Example:
 * closest(document.querySelector('[data-url="http://google.ru"]'), 'aside'); // return <aside>...</aside>
 *
 * @param {Node} node
 * @param {String} selector
 * @return {Node}
 */

function closest (node, selector) {

}