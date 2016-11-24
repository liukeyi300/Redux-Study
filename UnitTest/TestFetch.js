/**
 * Created by Liukeyi on 2016/11/24.
 */
var fetch = require('isomorphic-fetch');

fetch('http://localhost:8050/Services/GambolLocalService.asmx/GetPickingDetails')
    .then(response => response.text())
    .then(json => {var a = JSON.parse(json);  console.log(a);});
