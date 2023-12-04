function bold()
{
    document.execCommand('bold',true,null)
}

function italic()
{
    document.execCommand('italic',true,null)
}

function underline()
{
    document.execCommand('underline',true,null)
}


function justLeft()
{
    document.execCommand('justifyLeft');
}

function justCenter()
{
    document.execCommand('justifyCenter');
}

function justRight()
{
    document.execCommand('justifyRight');
}

function justFull()
{
    document.execCommand('justifyFull');
}

function undo()
{
    document.execCommand('undo');
}

function redo()
{
    document.execCommand('redo');
}

function changeFontColor()
{
    var color=document.getElementById('fontcolor').value;
    document.execCommand('foreColor',false,color);
}


