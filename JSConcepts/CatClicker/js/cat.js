Cat = function (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;

    this.renderHtml = function(){
        var html = '';
    
        html += '<div>' + this.name + '</div>';
        html += '<img src="' + this.imageUrl + '">';
    
        return html;
    }
}