import CMS from 'netlify-cms-app'
// TODO: Add a upload feature
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import PagePreview from './preview-templates/PagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('post', PagePreview)
