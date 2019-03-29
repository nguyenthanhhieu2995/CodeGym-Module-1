function yesClick()
    {
        alert("Yes. you are right ");
    }
    function noHover()
    {
        var x = Math.round(Math.random() * window.innerWidth);
        var y = Math.round(Math.random() * window.innerHeight);
        document.getElementById('n').style.left = x + 'px';
        document.getElementById('n').style.top = y + 'px';
    }