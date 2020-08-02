import $ from 'jquery'
import './css/1.css'
import './css/2.css'

$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'lightblue');
})