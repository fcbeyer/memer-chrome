var memeList = buildMemeList();
var memeRegExp = new RegExp("\b" + memeList + "\b",'gi');
$("body *").replaceText(memeRegExp, getImgUrl);

function buildMemeList() {
	var supportedMemes = ["notsureifserious.jpg","citationneeded.jpg","quizzicaldog.jpg","whynotboth.jpg","youdontsay.jpg","stoppedreadingthere.jpg",
							"thisiswhywecanthavenicethings.jpg","wtfisthisshit.jpg","wat.jpg","fistofangrygod.jpg","icame.jpg"];
	return supportedMemes.map(function(meme) {return "(" + meme + ")";}).join("|");
}

function getImgUrl(memeMatch){
	memeMatch = memeMatch.replace(".jpg",".png");
	return '<img src=' + chrome.extension.getURL("images/"+memeMatch)  + ' class="image memer-image">';
}