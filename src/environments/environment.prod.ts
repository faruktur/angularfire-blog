import { AngularEditorConfig } from '@kolkov/angular-editor';

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyA7wyeICLni8ynPl_RCYjzKDW_ukhjI7ho",
    authDomain: "my-blog-62c9a.firebaseapp.com",
    databaseURL: "https://my-blog-62c9a.firebaseio.com",
    projectId: "my-blog-62c9a",
    storageBucket: "my-blog-62c9a.appspot.com",
    messagingSenderId: "540404408869"
  }
}
,editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
