function ft_next_color()
{
    var colors = ['red', 'green', 'blue']
    if (document.getElementsByClassName(".balloon_circle") == '#FF0000')
    {
        document.getElementsByClassName(".balloon_circle").style.background_color = '#008000'
        document.getElementsByClassName(".balloon_triangle").style.background_color = '#008000'
    }

    else if (document.getElementsByClassName(".balloon_circle") == '#008000')
    {
        document.getElementsByClassName(".balloon_circle").style.background_color = '#0000FF'
        document.getElementsByClassName(".balloon_triangle").style.background_color = '#0000FF'
    }

    else if (document.getElementsByClassName(".balloon_circle") == '#0000FF')
    {
        document.getElementsByClassName(".balloon_circle").style.background_color = '#FF0000'
        document.getElementsByClassName(".balloon_triangle").style.background_color = '#FF0000'
    }

}
