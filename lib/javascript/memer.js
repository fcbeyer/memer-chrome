function buildMemeList() {
	var supportedMemes = ["notsureifserious.jpg","citationneeded.jpg","quizzicaldog.jpg","whynotboth.jpg","youdontsay.jpg","stoppedreadingthere.jpg",
							"thisiswhywecanthavenicethings.jpg","wtfisthisshit.jpg","wat.jpg","fistofangrygod.jpg","icame.jpg","thisisdog.jpg",
							"iseewhatyoudidthere.jpg","howaboutno.jpg","wtfamIreading.jpg","thatsthejoke.jpg","no1curr.gif","brilliant.jpg"];
	return supportedMemes.map(function(meme) {return "(" + meme + ")";}).join("|");
}

function getImgUrl(memeMatch){
	return '<img src=' + chrome.extension.getURL("lib/images/memes/"+memeMatch)  + ' class="image memer-image">';
}

function buildTrollList() {
	var trollList = [];
	var trolls = [];
	chrome.storage.sync.get({
		'trolls': []
	}, function(items) {
		trolls = items.trolls
		for(var x = 0; x < trolls.length; x++) {
			trollList.push(trolls[x].name);
		}
		//gotta do this here because chrome storage get is asynchronous
		replaceTrolls(trollList);
	});
}

function replaceTrolls(trollList) {
	var trollRegExp = new RegExp("\b" + trollList + "\b",'gi');
	var trollPosts = [];
	var search = "";
	var tbody;
	var tr;
	var commentDiv;
	var text = "";
	var trollRegExp;
	for(var troll = 0; troll < trollList.length; troll++) {
		trollPosts = []
		search = "a:contains('" + trollList[troll] + "')";
		trollPosts = $(search);
		for(var post = 0; post < trollPosts.length; post++) {
			curPost = trollPosts[post];
			tbody = $(curPost).closest("tbody");
			tbody = $(tbody).parent().closest("tbody");
			tr = tbody.children().eq(1);
			commentDiv = $(tr).find(".ctext");
			text = commentDiv.text();
			trollRegExp = new RegExp("\b" + text + "\b",'gi');
			$("body *").replaceText(trollRegExp,'MEGA TROLL');
		}
	}
}

//convert memes
var memeList = buildMemeList() + "|";
var memeRegExp = new RegExp("\b" + memeList + "\b",'gi');
$("body *").replaceText(memeRegExp, getImgUrl);

//replace trolls
//buildTrollList();
