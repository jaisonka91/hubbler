var express = require('express');
var _ = require('lodash');
var app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8060');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8060');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const data = [
  {
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
  },{
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
  },{
    "name": "Hoth",
    "rotation_period": "23",
    "orbital_period": "549",
    "diameter": "7200",
  },{
    "name": "Dagobah",
    "rotation_period": "23",
    "orbital_period": "341",
    "diameter": "8900",
  },{
    "name": "Bespin",
    "rotation_period": "12",
    "orbital_period": "5110",
    "diameter": "118000",
  },{
    "name": "Endor",
    "rotation_period": "18",
    "orbital_period": "402",
    "diameter": "4900",
  },{
    "name": "Naboo",
    "rotation_period": "26",
    "orbital_period": "312",
    "diameter": "12120",
  },{
    "name": "Coruscant",
    "rotation_period": "24",
    "orbital_period": "368",
    "diameter": "12240",
  },{
    "name": "Kamino",
    "rotation_period": "27",
    "orbital_period": "463",
    "diameter": "19720",
  },{
    "name": "Geonosis",
    "rotation_period": "30",
    "orbital_period": "256",
    "diameter": "11370",
  },{
    "name": "Utapau",
    "rotation_period": "27",
    "orbital_period": "351",
    "diameter": "12900",
  },{
    "name": "Mustafar",
    "rotation_period": "36",
    "orbital_period": "412",
    "diameter": "4200",
  },{
    "name": "Kashyyyk",
    "rotation_period": "26",
    "orbital_period": "381",
    "diameter": "12765",
  },{
    "name": "Polis Massa",
     "rotation_period": "24",
     "orbital_period": "590",
     "diameter": "0",
  },{
    "name": "Mygeeto",
    "rotation_period": "12",
    "orbital_period": "167",
    "diameter": "10088",
  },{
    "name": "Felucia",
    "rotation_period": "34",
    "orbital_period": "231",
    "diameter": "9100",
  },{
    "name": "Cato Neimoidia",
     "rotation_period": "25",
     "orbital_period": "278",
     "diameter": "0",
  },{
    "name": "Saleucami",
    "rotation_period": "26",
    "orbital_period": "392",
    "diameter": "14920",
  },{
    "name": "Eriadu",
    "rotation_period": "24",
    "orbital_period": "360",
    "diameter": "13490",
  },{
    "name": "Corellia",
    "rotation_period": "25",
    "orbital_period": "329",
    "diameter": "11000",
  },{
    "name": "Rodia",
    "rotation_period": "29",
    "orbital_period": "305",
    "diameter": "7549",
  },{
    "name": "Nal Hutta",
    "rotation_period": "87",
    "orbital_period": "413",
    "diameter": "12150",
  },{
    "name": "Dantooine",
    "rotation_period": "25",
    "orbital_period": "378",
    "diameter": "9830",
  },{
    "name": "Bestine IV",
    "rotation_period": "26",
    "orbital_period": "680",
    "diameter": "6400",
  },{
    "name": "Ord Mantell",
    "rotation_period": "26",
    "orbital_period": "334",
    "diameter": "14050",
  },{
    "name": "Trandosha",
    "rotation_period": "25",
    "orbital_period": "371",
    "diameter": "0",
  },{
    "name": "Socorro",
    "rotation_period": "20",
    "orbital_period": "326",
    "diameter": "0",
  },{
    "name": "Mon Cala",
    "rotation_period": "21",
    "orbital_period": "398",
    "diameter": "11030",
  },{
    "name": "Chandrila",
    "rotation_period": "20",
    "orbital_period": "368",
    "diameter": "13500",
  },{
    "name": "Sullust",
    "rotation_period": "20",
    "orbital_period": "263",
    "diameter": "12780",
  },{
    "name": "Toydaria",
    "rotation_period": "21",
    "orbital_period": "184",
    "diameter": "7900",
  }
]

app.get('/getData', function (req, res) {
  let result = [];
  let total = 0;
  result = data;
  if(req.query.s){
    const searchString = req.query.s;
    let regEx = new RegExp(searchString, "i");
    result = data.filter((item)=>{
      if(item.name.match(regEx)){
        return true;
      }
    });
  }
  total = result.length;
  if(req.query.sort){
    const { sort } = req.query;
    result = _.orderBy(result, [sort],['asc'])
  }
  if(req.query.l){
    const limit = req.query.l;
    result = result.splice(0, limit);
  }else{
    result = result.splice(0, 5);
  }
  res.send({total: total, data: result});
});

app.listen(8765);
