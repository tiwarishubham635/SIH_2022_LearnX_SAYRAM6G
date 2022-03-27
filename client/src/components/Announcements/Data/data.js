let data = require('./announcements.json');
let i
let finalData = []
for(i=0;i<data.length;i++)
{
    var dict = {
        id: i+1,
        title: data[i][0],
        issuedBy: data[i][1]
    }
    finalData.push(dict)
}
//console.log(finalData)
export default finalData;
