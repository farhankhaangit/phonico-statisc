// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(first_prog, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
     value: '',
     alignToBottom: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    // Set default step function for all animate calls
    step: (state, bar) => {
     bar.path.setAttribute('stroke', state.color)
     var value = Math.round(bar.value() * 100);
     if (value === 0) {
      bar.setText('MB')
     } else {
      bar.setText(value +'MB')
     }
   
     bar.text.style.color = state.color
    }
   });
   bar.text.style.fontSize = '2rem';
   
   bar.animate(0.5); // Number from 0.0 to 1.0


   // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar2 = new ProgressBar.SemiCircle(scnd_prog, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
     value: '',
     alignToBottom: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    // Set default step function for all animate calls
    step: (state, bar2) => {
        bar2.path.setAttribute('stroke', state.color)
     var value = Math.round(bar2.value() * 100);
     if (value === 0) {
        bar2.setText('MB')
     } else {
        bar2.setText(value +'MB')
     }
   
     bar2.text.style.color = state.color
    }
   });
   bar2.text.style.fontSize = '2rem';
   
   bar2.animate(0.6); // Number from 0.0 to 1.0


   // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar3 = new ProgressBar.SemiCircle(third_prog, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
     value: '',
     alignToBottom: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    // Set default step function for all animate calls
    step: (state, bar3) => {
        bar3.path.setAttribute('stroke', state.color)
     var value = Math.round(bar3.value() * 100);
     if (value === 0) {
        bar3.setText('MB')
     } else {
        bar3.setText(value +'MB')
     }
   
     bar3.text.style.color = state.color
    }
   });
   bar3.text.style.fontSize = '2rem';
   
   bar3.animate(0.8); // Number from 0.0 to 1.0


   // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar4 = new ProgressBar.SemiCircle(forth_prog, {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
     value: '',
     alignToBottom: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    // Set default step function for all animate calls
    step: (state, bar4) => {
        bar4.path.setAttribute('stroke', state.color)
     var value = Math.round(bar4.value() * 100);
     if (value === 0) {
        bar4.setText('MB')
     } else {
        bar4.setText(value +'MB')
     }
   
     bar4.text.style.color = state.color
    }
   });
   bar4.text.style.fontSize = '2rem';
   
   bar4.animate(0.3); // Number from 0.0 to 1.0