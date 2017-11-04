(function () {
    var cats = [
        new Cat(1, 'kiscica', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg'),
        new Cat(2, 'nagycica', 'https://i.pinimg.com/736x/21/95/18/21951812cad294dfa48b7eacada72f52--munchkin-kitten-cute-cats-photos.jpg'),
        new Cat(3, 'nagycica', 'https://i.pinimg.com/736x/21/95/18/21951812cad294dfa48b7eacada72f52--munchkin-kitten-cute-cats-photos.jpg')
    ];

    $(function () {
        $.each(cats, function (index, cat) {
            var $catsMenu = $('#cats-menu');
            var $catsMenuItem = $('<a href="" onclick="return false;">' + cat.name + ' | </a>');
            $catsMenuItem.on('click', function(){
                $('#cat-container').html(cat.getHtml());
            });

            $catsMenu.append($catsMenuItem);
        });
    });
})();