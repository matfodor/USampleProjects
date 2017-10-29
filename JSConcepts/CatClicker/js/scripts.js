(function () {
    var cats = [
        new Cat('kiscica', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg'),
        new Cat('nagycica', 'https://i.pinimg.com/736x/21/95/18/21951812cad294dfa48b7eacada72f52--munchkin-kitten-cute-cats-photos.jpg')
    ];

    $(function () {
        var clickCounter = 0;

        addCats();

        $('img').on('click', function () {
            $('#click-counter').text(++clickCounter);
        });
    });

    function addCats(){
        $catsContainer = $('#cats-container');
        $.each(cats, function(index, cat){
            $catsContainer.append(cat.renderHtml());
        });
    }
})();