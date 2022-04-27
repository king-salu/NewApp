
exports.spotify_music_rearray = (data)=>{
    var rearray = [];
    data.body.albums.items.forEach((element,key) => {
        var _object = {
            name: element.name,
            type : element.type,
            id: element.id,
            images: element.images
        }

        rearray.push(_object);
    });

    return rearray;
}