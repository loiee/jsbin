var myTextarea = document.getElementById('code1')
var editor1 = CodeMirror(code1, {
    lineNumbers: true,
    mode: 'htmlmixed',
    theme: 'monokai',
});

var editor2 = CodeMirror(code2, {
    lineNumbers: true,
    mode: 'css',
    theme: 'monokai',
});

var editor3 = CodeMirror(code3, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai',
});

editor1.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>

</body>
</html>`)

function getContent() {
    $('.content')[0].contentWindow.document.open()
    if ($('#autorunjs')[0].checked == true) {
        $('.content')[0].contentWindow.document.write(editor1.getValue() + '<style>' + editor2.getValue() + '</style>' + '<script>' + editor3.getValue() + '</\script>')
    } else {
        $('.content')[0].contentWindow.document.write(editor1.getValue() + '<style>' + editor2.getValue() + '</style>')
    }
}

$('.runjs').click(function() {
    $('.content')[0].contentWindow.document.write('</\style>' + '<script>' + editor3.getValue() + '</\script>')
})

$('#code1').keyup(getContent)
$('#code2').keyup(getContent)
$('#code3').keyup(getContent)

function toggleShow(btn, el) {
    $(btn).click(function() {
        $(el).toggleClass('show')
    })
}

toggleShow('.htmlbtn', '#code1')
toggleShow('.cssbtn', '#code2')
toggleShow('.jsbtn', '#code3')
toggleShow('.outputbtn', '#output')
$('#code3').addClass('show')

$('#addlib').change(function() {
    var src = `<script src="${this.value}"><\/script>`
    var replacehtml = editor1.getValue().replace('</head>', '  ' + src + '\n</head>')
    editor1.setValue(replacehtml)
})
