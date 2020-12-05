class View{
    constructor(){
        //handlebars init
        this.weatherTemplate = $(`#weather-template`).html()
        this.weatherSelector = Handlebars.compile(this.weatherTemplate);
    }
    renderer(cities){
        const newHTML = this.weatherSelector({ cities });
        $('#weatherContainer').empty().append(newHTML);
    }
    changeIcon(object, saved){
        if(!saved){
            $(object).removeClass().addClass("fas fa-minus-circle subBtn")
        }else{
            $(object).removeClass().addClass("fas fa-plus-circle addBtn")
        }
    }
}