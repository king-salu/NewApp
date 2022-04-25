var request = require('request');

exports.new_release = (req,resp)=>{
    console.log(req.params);
    //const access_tko = req.cookies ? req.cookies['access_tko'] : null;
    //const access_tko = req.body.access_token;
    const access_tko = req.params.access_token;
    var options = {
        'url': 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
        'headers': {
            'Authorization': `Bearer ${access_tko}`
            //'Authorization': 'Bearer BQAZNTLRzxTGxFH6mT7JSvSp3NsiVYNJEkBHe_hRvt8J8gMqLJ0fAOEMVNLVjnyT50LWbb1y0MM0_VHxx9aJ8koUXHhUlVuYTjBAqE_kESHB9rwsPNIo5sNIe9QazRoDnrOK_UN9DJ68iIMrKZ0MeA6F5Kfi9MTKTEzwwjcCc-j3zPYI0noy2g'
          }
    }
    console.log(options);
    request.get(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);

        resp.status(201).json({
            data: JSON.parse(response.body)
        });
    });
}