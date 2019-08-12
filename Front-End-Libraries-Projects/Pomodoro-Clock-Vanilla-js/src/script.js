var pomodoro = {
    started: false, 
    minutes: 0,
    seconds: 0,
    perMinWork: 25,
    perSecWork: 0,
    perMinBreak: 5,
    perSecBreak: 0,
    fillerHeight: 0,
    fillerIncrement: 0,
    interval: null,
    minutesDom: null,
    secondsDom: null,
    fillerDom: null,
    curDomMinW: null,
    curDomSecW: null,
    curDomMinB: null,
    curDomSecB: null,
    
    init: function() {
      var self = this;
        this.minutesDom = document.querySelector('#minutesHtml'); 
        this.secondsDom = document.querySelector('#secondsHtml'); 
        this.fillerDom = document.querySelector('#filler ');
        this.curDomMinW = document.querySelector('#curMinW');
        this.curDomMinB = document.querySelector('#curMinB');
        this.interval = setInterval(function() {
          self.intervalCallback.apply(self);
        }, 1000);
      
   self.curDomMinW.innerHTML = self.toDoubleDigit(self.perMinWork);
   self.curDomMinB.innerHTML = self.toDoubleDigit(self.perMinBreak);
   
   document.querySelector('#work').onclick = function() {
     self.startWork.apply(self);
     };
     
   document.querySelector('#break').onclick = function() {
     self.startBreak.apply(self);
     };
 
   document.querySelector('#stop').onclick = function() {
     self.stopTimer.apply(self);
     };
      
   document.querySelector('#moreMinutes').onclick = function() {
    self.perMinWork++;
    self.minutesDom.innerHTML = self.toDoubleDigit(self.perMinWork);
    self.curDomMinW.innerHTML = self.toDoubleDigit(self.perMinWork);
    }; 
      
   document.querySelector('#lessMinutes').onclick = function() {
     if(self.perMinWork>0){ 
       self.perMinWork--;
       self.minutesDom.innerHTML = self.toDoubleDigit(self.perMinWork);
       self.curDomMinW.innerHTML = self.toDoubleDigit(self.perMinWork);
       }     
     }; 
      
    document.querySelector('#moreMinutesBr').onclick = function() {
    self.secondsDom.innerHTML = self.toDoubleDigit(self.perSecBreak);
    self.perMinBreak++;
    self.minutesDom.innerHTML = self.toDoubleDigit(self.perMinBreak);
    self.curDomMinB.innerHTML = self.toDoubleDigit(self.perMinBreak);
    }; 
      
   document.querySelector('#lessMinutesBr').onclick = function() {
     self.secondsDom.innerHTML = self.toDoubleDigit(self.perSecBreak); 
     if(self.perMinBreak>0){ 
       self.perMinBreak--;
       }
     self.minutesDom.innerHTML = self.toDoubleDigit(self.perMinBreak);
     self.curDomMinB.innerHTML = self.toDoubleDigit(self.perMinBreak);
     }; 
    },
  
    resetVariables: function(mins, secs, started){
     this.minutes = this.toDoubleDigit(mins);
     this.seconds = this.toDoubleDigit(secs);
     this.started = started;
     this.fillerIncrement = 200 / (this.minutes * 60);
     this.fillerHeight = 0;
     },
  
    intervalCallback: function() {
     if (!this.started) return false;
      if (this.seconds == 0){
       if (this.minutes == 0){
         this.timerComplete();                  
         return;
         }
       this.seconds = 59;
       this.minutes--;
       } 
       else {
        this.seconds--;
       }
       this.updateDom();
     },
       
    updateDom: function() {
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
      },
      
     startWork: function() {
       console.log("work");
       this.resetVariables(this.perMinWork, this.perSecWork, true);
       },
  
     startBreak: function() {
       console.log("break");
       this.resetVariables(this.perMinBreak, this.perSecBreak, true);
       },
 
     stopTimer: function() {
       console.log("stop");
       this.resetVariables(this.perMinWork, this.perSecWork, false);
       this.updateDom();
       },
  
   toDoubleDigit: function(num) {
    if(num.toString().length == 1){
      return "0" + parseInt(num.toString(), 10);
      }
    return num;
    },
     
    timerComplete: function() {
      this.started = false;
      this.fillerHeight = 0;
      }
};

window.onload = function() {
  pomodoro.init();
 };