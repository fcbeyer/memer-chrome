function buildMemeList() {
	var supportedMemes = ["notsureifserious.jpg","citationneeded.jpg","quizzicaldog.jpg","whynotboth.jpg","youdontsay.jpg","stoppedreadingthere.jpg",
							"thisiswhywecanthavenicethings.jpg","wtfisthisshit.jpg","wat.jpg","fistofangrygod.jpg","icame.jpg","thisisdog.jpg",
							"iseewhatyoudidthere.jpg","howaboutno.jpg","wtfamIreading.jpg","thatsthejoke.jpg","no1curr.gif"];
	return supportedMemes.map(function(meme) {return "(" + meme + ")";}).join("|");
}

function getImgUrl(memeMatch){
	if(memeMatch.indexOf(".jpg") != -1) {
		memeMatch = memeMatch.replace(".jpg",".png");
	}
	return '<img src=' + chrome.extension.getURL("lib/images/memes/"+memeMatch)  + ' class="image memer-image">';
}

function buildTrollList() {
	
}

//convert memes
var memeList = buildMemeList();
var memeRegExp = new RegExp("\b" + memeList + "\b",'gi');
$("body *").replaceText(memeRegExp, getImgUrl);

//replace trolls
var trollList = buildTrollList();