var express = require('express');
var nodeApp = express();

nodeApp.use(express.static('C:\\Users\\daniel86\\Documents\\GitHub\\AngularIntro\\step_0'));

nodeApp.listen(process.env.PORT || 3000);