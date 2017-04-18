var config = {
			extraPlugins: 'widget,font,colordialog,tableresize,codesnippet,uploadimage,image2,embed,autoembed,mathjax',
			codeSnippet_theme: 'monokai_sublime',
			mathJaxLib: 'http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js?config=TeX-AMS_HTML',
			width: '100%',
			height: 667,

			// Upload images to a CKFinder connector (note that the response type is set to JSON).
			uploadUrl: './ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

			// Configure your file manager integration. This example uses CKFinder 3 for PHP.
			filebrowserBrowseUrl: './ckfinder/ckfinder.html',
			filebrowserImageBrowseUrl: './ckfinder/ckfinder.html?type=Images',
			filebrowserUploadUrl: './ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
			filebrowserImageUploadUrl: './ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',

			image2_alignClasses: [ 'image-align-left', 'image-align-center', 'image-align-right' ],
			image2_disableResizer: true
		};

CKEDITOR.replace( 'editor', config);
if ( CKEDITOR.env.ie && CKEDITOR.env.version == 8 ) {
	document.getElementById( 'ie8-warning' ).className = 'tip alert';
}