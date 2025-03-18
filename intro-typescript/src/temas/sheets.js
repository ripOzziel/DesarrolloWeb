function search(searchText){
    var spreadSheetId = '1J8Qz6UU1wHFza0btgWbXaDNWhT0GDMV_wh7oWFJEw5I'
    var dataRage = ''
    var data = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRage).values;
    var ar = []
    console.log(data)
  
    data.forEach(function(f){
      ind = f[0].includes(searchText)
      console.log(f[0] + ' ?= ' + searchText + ' ==>> ' + ind)
      if(ind){
        ar.push(f)
        console
      }
    })
    console.log('Dato agregado: ' + ar)
    return ar

  }


  function search_fail(){
    var spreadSheetId = '1J8Qz6UU1wHFza0btgWbXaDNWhT0GDMV_wh7oWFJEw5I'
    var dataRage = ''
    var data = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRage).values;
    var ar = []
    console.log(data)

    data.forEach(function(f){
        palabra = f[0].split('')
        palabra.forEach(function(c){
            if (c == '½') {
                
            }
        })
    })
  }