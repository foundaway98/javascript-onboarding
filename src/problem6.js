//닉네임을 두 글자씩 나눠서 key,value 형식으로 저장한 nameSliceTable 생성.
//key : 두 글자로 나눈 문자열
//value : 해당 문자열을 가진 닉네임이 포함된 forms의 index
//value의 길이가 2 이상이라면 해당 value의 key를 가진 인원이 2명 이상 <- 핵심 아이디어
function makeNameSliceTable(name, index, nameSliceTable) {
  let nameSlice = "";
  for (let j = 0; j < name.length - 1; j++) {
    nameSlice = name.substr(j, 2);
    if (!(nameSlice in nameSliceTable)) {
      nameSliceTable[nameSlice] = new Set();
    }
    nameSliceTable[nameSlice].add(index);
  }
  return nameSliceTable;
}

//nameSliceTable을 순회하면서 중복되는 nameSlice가 있는 form의 index를 찾는다.
function findDupForm(nameSliceTable) {
  let dupFormIndexs = new Set();
  for (nameSlice in nameSliceTable) {
    dupFormIndexs = makeDupFormIndexs(nameSliceTable[nameSlice], dupFormIndexs);
  }
  return dupFormIndexs;
}

//dupFormIndex를 저장하는 set을 만든다.
function makeDupFormIndexs(dupedIndexs, dupFormIndexs) {}

//Array형식으로 정답을 가공.
function makeAnswerArr(forms, dupForm) {}

function problem6(forms) {
  var answer = [];
  var answer = [];
  let nameSliceTable = {};
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length == 1) {
      continue;
    }
    nameSliceTable = makeNameSliceTable(forms[i][1], i, nameSliceTable);
  }
  let dupFormIndexs = findDupForm(nameSliceTable);
  return answer;
}

module.exports = problem6;
