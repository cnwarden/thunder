
// bind dropdonw list

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/markdown");

var preview_btn = $("#js-editor-preview");
var editor_box = $("#editor");
var preview_box = $("#preview");
preview_btn.bind("click", function(){
    preview_box.html(marked.parse(editor.getValue()));
});