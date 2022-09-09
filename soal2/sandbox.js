const dataDummy = [
  {
    "year": "2017",
    "points": [
      { "club": "Chelsea", "points": "93" },
      { "club": "Tottenham", "points": "86" },
      { "club": "Manchester City", "points": "78" },
      { "club": "Liverpool", "points": "76" },
      { "club": "Arsenal", "points": "75" },
      { "club": "Manchester United", "points": "69" }]
  },
  {
    "year": "2018",
    "points": [
      { "club": "Manchester City", "points": "100" },
      { "club": "Manchester United", "points": "81" },
      { "club": "Tottenham", "points": "77" },
      { "club": "Liverpool", "points": "75" },
      { "club": "Chelsea", "points": "70" },
      { "club": "Arsenal", "points": "63" }]
  }, {
    "year": "2019",
    "points": [
      { "club": "Manchester City", "points": "98" },
      { "club": "Liverpool", "points": "97" },
      { "club": "Chelsea", "points": "72" },
      { "club": "Tottenham", "points": "71" },
      { "club": "Arsenal", "points": "70" },
      { "club": "Manchester United", "points": "66" }]
  }]

const averageClubs = (datas) => {
  const counts = {};
  datas.forEach((e) => {
    e.points.forEach((el) => {
      counts[el.club] = (counts[el.club] || 0) + parseInt(el.points) / datas.length
    })
  })
  return counts
}

const shortClubs = (datas) => {
  let shorting = []
  for (var club in datas) {
    shorting.push([club, datas[club]]);
  }
  shorting.sort(function (a, b) {
    return b[1] - a[1];
  });
  return shorting
}

const highestTeamAverage = (datas) => {
  const average = averageClubs(datas)
  const short = shortClubs(average)
  let result = ""
  short.forEach((e,i) => {
    result += `${i+1}. ${e[0]} || ${e[1]}\n`
  })
  return result
}

console.log(highestTeamAverage(dataDummy));