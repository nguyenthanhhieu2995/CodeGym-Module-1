
var Images = {
	imgsDB: 
	[
        ["funny-cat1_part1x1.jpg", 
        "funny-cat1_part2x1.jpg", 
        "funny-cat1_part3x1.jpg", 
        "funny-cat1_part4x1.jpg", 
        "funny-cat1_part5x1.jpg"],
        ["monkey_part1x1.jpg",
        "monkey_part2x1.jpg",
        "monkey_part3x1.jpg",
        "monkey_part4x1.jpg",
        "monkey_part5x1.jpg"],
        ["panda_swap_part1x1.jpg",
        "panda_swap_part2x1.jpg",
        "panda_swap_part3x1.jpg",
        "panda_swap_part4x1.jpg",
        "panda_swap_part5x1.jpg"]
	],
	imgpos: [0, 0, 0, 0, 0]	
}
function setImagesRandom() {
	for (var i=1; i <= 5; i++)
	{
		let topicImg = Math.floor ((Math.random() * 3));
		replaceImage(i, topicImg);
	}
}
function replaceImage(index, topicImg) {
	Images.imgpos[index - 1] = topicImg;        
	var imageName = "img" + index.toString();   
	document.getElementById(imageName).setAttribute("src", "./img/" + Images.imgsDB[topicImg][index - 1]);
}
function imageClick(index) {
	var topicImg = Images.imgpos[index - 1];
	if (topicImg === 0) {
		replaceImage(index, 1);
	}
	else if (topicImg === 1) {
		replaceImage(index, 2);
	}
	else {
		replaceImage(index, 0);
    }	
    checkDone();
}
function checkDone() {
    var check = true;
    for ( var i = 1; i < 5; i++) {
        if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
            check = false;
        }
    }
    if (check == false) {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "black 2px 3px 3px";
        }
        document.getElementById("result").innerHTML = "";
    } else {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "green 4px 4px 9px";
        }
        document.getElementById("result").innerHTML = "Done!";
    }
}
function main(){
    setImagesRandom();
}


window.onload = main();
