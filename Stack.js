var stack={};
var index=0;

var datalist=new Array();
stack.push=function (data) {
    datalist[index]=data;
    index++;
    return data;
};
stack.pop=function() {
  if(index==0){
    return "데이터가 없습니다";
  }
  else{
      index--;
      return datalist[index]+"을 꺼냇습니다.";
  }
};
module.exports=stack;
