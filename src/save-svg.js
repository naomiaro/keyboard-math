export function save (svg, name = 'download.svg') {
		const svgData = svg.outerHTML;
		const blob = new Blob([svgData], {type: 'image/svg+xml'});
		const svgUrl = URL.createObjectURL(blob);
		const downloadLink = document.createElement("a");
		downloadLink.href = svgUrl;
		downloadLink.download = name;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	  URL.revokeObjectURL(svgUrl)
}
