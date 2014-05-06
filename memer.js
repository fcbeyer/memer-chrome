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
	//var v = textNode.nodeValue;
	var v = textNode.parentElement.innerHTML;
	switch(v.match(/\b\w+\.jpg\b/g).toString()) {
		case "notsureifserious.jpg":
			var imgURL = chrome.extension.getURL("images/notsureifserious.png");
			v = v.replace(/\bnotsureifserious.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
			textNode.parentElement.innerHTML = v;
			break;
		case "citation_needed.jpg":
			var imgURL = chrome.extension.getURL("images/citation_needed.png");
			v = v.replace(/\bcitation_needed.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
			textNode.parentElement.innerHTML = v;
			break;
		case "quizzicaldog.jpg":
			var imgURL = chrome.extension.getURL("images/quizzicaldog.png");
			v = v.replace(/\qquizzicaldog.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
			textNode.parentElement.innerHTML = v;
			break;
		case "whynotboth.jpg":
			var imgURL = chrome.extension.getURL("images/whynotboth.png");
			v = v.replace(/\bwhynotboth.jpg\b/g, '<img src=' + imgURL + ' class="image memer-image">');
			textNode.parentElement.innerHTML = v;
			break;
		default:
			break;
	}
}