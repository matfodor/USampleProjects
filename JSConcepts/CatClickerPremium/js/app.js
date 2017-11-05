$(function () {
    var cats = [
        new Cat(1, 'kiscica', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg'),
        new Cat(2, 'nagycica', 'https://i.pinimg.com/736x/21/95/18/21951812cad294dfa48b7eacada72f52--munchkin-kitten-cute-cats-photos.jpg'),
        new Cat(3, 'nagycica2', 'https://i.pinimg.com/736x/21/95/18/21951812cad294dfa48b7eacada72f52--munchkin-kitten-cute-cats-photos.jpg')
    ]

    var controller = {
        getCats: function(){
            return cats;
        },

        showCatDetail: function(catId){
            viewCat.render(catId);
        },

        getCatDetail(catId){
            return cats.find(function(cat){
                return cat.id == catId;
            });
        },

        addClickToCatById(catId){
            var cat = this.getCatDetail(catId);

            if(!cat){
                return;
            }
            cat.addClick();
        },

        init: function(){
            viewCatsMenu.init();
            viewCat.init();
        }
    }

    var viewCatsMenu = {
        init: function(){
            this.$catsMenu = $('#cat-menu');
            
            this.$catsMenu.on('click', 'a', function(e){
                var cat = $(e.target).parents('.cat').data();
                
                controller.showCatDetail(cat.id);
            });

            this.render();
        },

        render: function(){
            var $catsMenu = this.$catsMenu;
            var template = $('script[data-template="cat-menu-item"]').html();

            $catsMenu.html('');
            controller.getCats().forEach(function(cat){
                $catsMenu.append(template.replace(/{{id}}/g, cat.id).replace(/{{name}}/g, cat.name));
            });
        }
    }

    var viewCat = {
        init: function(){
            this.$catContainer = $('#cat-container');

            this.$catContainer.on('click', 'img', function(e){
                var cat = $(e.target).parents('.cat-detail').data();
                
                controller.addClickToCatById(cat.id);
                controller.showCatDetail(cat.id);
            });
        },

        render: function(catId){
            var cat = controller.getCatDetail(catId);
            if(!cat){
                return;
            }
            
            $catContainer = this.$catContainer;
            var template = $('script[data-template="cat"]').html();

            $catContainer.html(template.replace(/{{id}}/g, cat.id).replace(/{{name}}/g, cat.name).replace(/{{clickCount}}/g, cat.clickCount).replace(/{{imageUrl}}/g, cat.imageUrl));
        }
    }

    controller.init();
});