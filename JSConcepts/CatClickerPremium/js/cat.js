Cat = function (id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.clickCount = 0;

    this.addClick = function(){
        this.clickCount++;
    }
}