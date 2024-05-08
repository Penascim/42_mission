function ft_change_color()
{
    var colors = ['#FFC0CB', '#FA8072', '#E6E6FA', '#FFE4B5', '	#FFFACD', '#E0FFFF', '#F0FFF0', '#FA8072', '#F5DEB3', '#ADFF2F', '#00BFFF', '#C0C0C0']
    var random_color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = random_color;
}
