const model = new Model()
const view = new View()

$(`#searchBtn`).on('click',async function(){
    const cityName = $('#textLine').val()
    if(!cityName)
        return
    model.getCityData(cityName).then(val => view.renderer(val))
})

window.onload = async (event) => {
    const data = await model.getDataFromDB()
    view.renderer(data)
};

$("#weatherContainer").on('click','.addBtn',async function(){
    await model.saveCity($(this).siblings('span').text())
    view.changeIcon(this,false)
})

$("#weatherContainer").on('click','.subBtn',async function(){
    await model.removeCity($(this).siblings('span').text())
    view.changeIcon(this,true)
})

