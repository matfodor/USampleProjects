Cat = function (id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.clickCount = 0;

    this.addClick = function(){
        this.clickCount++;
    }

    this.getHtml = function() {
        var $name = $('<div>' + this.name + '</div>');
        var $clicksCount = $('<span>(' + this.clickCount + ')</span>');
        var $img = $('<img height="100" width="100" src="' + this.imageUrl + '">');

        var that = this;
        $img.on('click', function(e){
            that.addClick();
            $clicksCount.html('<span>(' + that.clickCount + ')</span>');
        });

        return $('<div></div>').append($name.append($clicksCount), $img);
    }
}