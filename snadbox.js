fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then((response) => {
    console.log('resolved', response);
    return response.json();
  })
  .then((data) => {
    var sortedData = [...data].sort((a, b) => b.points - a.points);
    var playernames = document.getElementsByClassName('name');
    var playerpoints = document.getElementsByClassName('points');
    var avatarimage = document.getElementsByClassName('image');
    var avatarimageArray = Array.from(avatarimage);
    var playerpointsArray = Array.from(playerpoints);
    var playernamesArray = Array.from(playernames); 

    for (let i = 0; i < 6; i++) {
      playernamesArray[i].innerHTML = sortedData[i + 3].name;
      playerpointsArray[i].innerHTML = sortedData[i+3].points;
      avatarimageArray[i].src = sortedData[i+3].avatar;
    }
    var first = document.getElementById('firstplayer');
    var firstImage = document.getElementById('firstImage');
    firstImage.src = sortedData[0].avatar;
    
    
    first.innerHTML = sortedData[0].name + ' . ' + sortedData[0].points;
    // first = first.toString();
    first.style.color = 'white';
    first.style.whiteSpace = 'nowrap';  
    var second = document.getElementById('secondplayer');
    var secondImage = document.getElementById('secondImage');
    secondImage.src = sortedData[1].avatar;

    second.innerHTML = sortedData[1].name + ' . ' + sortedData[1].points;
    second.style.color = 'white';
    second.style.whiteSpace = 'nowrap';  
    var third = document.getElementById('thirdplayer');
    var thirdImage = document.getElementById('thirdImage');
    thirdImage.src = sortedData[2].avatar;

    third.innerHTML = sortedData[2].name + ' . ' + sortedData[2].points;
    third.style.color = 'white';
    third.style.whiteSpace = 'nowrap';  




    console.log(sortedData);
  })
  .catch((err) => {
    console.log('rejected', err);
  });
