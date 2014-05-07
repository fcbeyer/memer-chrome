walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.parentElement.innerHTML;
	var matches = v.match(/\b\w+\.jpg\b/g);
	var imgURL;
	if (matches) {
		for (var c = 0; c < matches.length; c++) {
			switch(matches[c]) {
				case "notsureifserious.jpg":
					imgURL = chrome.extension.getURL("images/notsureifserious.png");
					v = v.replace(/\bnotsureifserious.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "citationneeded.jpg":
					imgURL = chrome.extension.getURL("images/citation_needed.png");
					v = v.replace(/\bcitationneeded.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "quizzicaldog.jpg":
					imgURL = chrome.extension.getURL("images/quizzicaldog.png");
					v = v.replace(/\qquizzicaldog.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "whynotboth.jpg":
					imgURL = chrome.extension.getURL("images/whynotboth.png");
					v = v.replace(/\bwhynotboth.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "youdontsay.jpg":
					imgURL = chrome.extension.getURL("images/youdontsay.png");
					v = v.replace(/\byoudontsay.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "thisiswhywecanthavenicethings.jpg":
					imgURL = chrome.extension.getURL("images/thisiswhywecanthavenicethings.png");
					v = v.replace(/\bthisiswhywecanthavenicethings.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "wtfisthisshit.jpg":
					imgURL = chrome.extension.getURL("images/wtfisthisshit.png");
					v = v.replace(/\bwtfisthisshit.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "wat.jpg":
					imgURL = chrome.extension.getURL("images/wat.png");
					v = v.replace(/\bwat.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "fistofangrygod.jpg":
					imgURL = chrome.extension.getURL("images/fistofangrygod.png");
					v = v.replace(/\bfistofangrygod.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "icame.jpg":
					imgURL = chrome.extension.getURL("images/icame.png");
					v = v.replace(/\bicame.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				case "stoppedreadingthere.jpg":
					imgURL = chrome.extension.getURL("images/stoppedreadingthere.png");
					v = v.replace(/\bstoppedreadingthere.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
					break;
				default:
					break;
			}
		}//end of for loop
		textNode.parentElement.innerHTML = v;
	}
}