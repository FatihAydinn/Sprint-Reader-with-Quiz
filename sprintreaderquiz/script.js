function Question(questionTxt, questionOptions, questionCorrect) {
    this.questionTxt = questionTxt;
    this.questionOptions = questionOptions;
    this.questionCorrect = questionCorrect;
    // this.checkAnswer = function(answer)
    // {
    //   return answer === this.questionCorrect;
    // }
  }
  Question.prototype.checkAnswer = function(answer)
    {
      return answer === this.questionCorrect
    }
  // let ques1 = new Question("ilk soru",{ a: "evet", b: "beyler", c: "evet beyler" },"c");
  let questions = [
      new Question("Rekorun eski sahibi kimdir?",{ A: "Tommy Edison", B: "Dr Amit Patel",C:"Mike Newman",D:"Metin Şentürk" },"C"),
      new Question("Rekorun kırıldığı yer?",{ A: "GAP Havaalanı", B: "Atatürk Havaalanı", C: "Adnan Menderes Havalimanı",D:"Ankara Esenboğa Havalimanı" },"A"),
      new Question("Bahsi geçen rekorun kırıldığı yıl",{ A: "2011", B: "2010",C:"2000",D:"2018" },"B"),
      new Question("Rekor hangi araç ile kırılmıştır?",{ A: "Ferrari 599XX", B: "Renault Clio",C:"Ferrari 812",D:"Ferrari F430" },"D"),
      new Question("Rekor sürüşü sırasında ulaşılan en yüksek hız?",{ A: "301.23", B: "298.89",C:"303.62",D:"292.89" },"C"),
    ];
  
  var limit = questions.length;
  function Quiz(questions)
  {
    this.questions=questions;
    this.questionIndex = 0;
  }
  Quiz.prototype.questionBring = function()
  {
    return this.questions[this.questionIndex];
  }
  const quiz = new Quiz(questions);
  // console.log(ques1.questionOptions);
  // console.log(questions[0].checkAnswer("c")," and ",questions[0].checkAnswer("a"));
  
  // document.querySelector(".btn-start").addEventListener("click",function(){
  // // document.getElementsByClassName('.btn-start').style.display="none";
  
  // document.querySelectorAll(".btn-start").forEach(function(el) {
  //   el.style.display = 'none';
  // });// start.style.display = "none";
  //   console.log(quiz.questionBring());
  //   // quiz.questionIndex++;
  // })
  timer_on = 0;
  document.getElementById("btn-reflesh").style.display = "none";
  document.getElementById("btn-next").style.display = "none";
  document.getElementById("btn-start").style.display = "none";
  document.getElementById("btn-stop").style.display = "none";
  document.getElementById("btn-replay").style.display = "none";
  
  var start = document.getElementById("btn-start");
  start.addEventListener("click",function(){
    questionShow(quiz.questionBring());
    document.querySelector(".quiz-box").classList.add("active")
    // document.getElementById("btn-start").style.display = "none";
    // quiz.questionIndex=0;
    // document.getElementById("btn-next").style.display = "inline";
    document.getElementById("btn-start").style.display = "none";
  document.getElementById("btn-stop").style.display = "none";
  document.getElementById("btn-replay").style.display = "none";
  
    // let question = quiz.questionBring();
  
  
  })
  var next = document.getElementById("btn-next");
  next.addEventListener("click",function()
  {
  document.getElementById("btn-next").style.display = "none";
  
    quiz.questionIndex +=1;
    if(limit == (quiz.questionIndex+1))
    {
    document.getElementById("btn-next").style.display = "none";
    }
    questionShow(quiz.questionBring());
  
  //   if(quiz.limit != quiz.questionIndex +1)
  //   {
  //     quiz.questionIndex +=1;
  //   questionShow(quiz.questionBring());
  //   }
  // else{
  // console.log("quiz bitti")}
    // quiz.questionIndex++;
  
    // console.log(quiz.questionBring());
  
  
  })
  
  const option_list = document.querySelector(".option_list");
  let clickcounter = 0;
  let correct = 0;
  let incorrect = 0;
  function questionShow(question)
  {
  let content = `<span>${question.questionTxt}</span>`;
  let options = '';
  for(let answers in question.questionOptions)
  {
    options+=
    `<div class="option">
    <span><b>${answers}</b>) ${question.questionOptions[answers]}</span>
  </div>`;
  }
  document.querySelector(".card-header").innerHTML = content;
  option_list.innerHTML = options ;
  
  const option = option_list.querySelectorAll(".option");
  for (let opt of option)
  {
    opt.setAttribute("onclick", "optionSelected(this)")
  }
  }
  var reflesh = document.getElementById("btn-reflesh");
  reflesh.addEventListener("click",function()
  {
    window.location.reload();
  })
  function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    console.log(answer)
    console.log(quiz.questionIndex+1);
    clickcounter++;
  console.log(clickcounter);
  
    let question = quiz.questionBring();
    if(question.checkAnswer(answer))
    {
      option.classList.add("correct")
      correct++;
    }
    else
    {
      option.classList.add("incorrect")
      incorrect++;
    }
    for(let i = 0 ; i < option_list.children.length ; i++)
    {
      option_list.children[i].classList.add("disabled")
    }
  
    if(clickcounter == (quiz.questionIndex+1))
    {
      document.getElementById("btn-next").style.display = "inline";
    }
    else{
      document.getElementById("btn-next").style.display = "none";
    }
    if(clickcounter == limit)
    {
      document.getElementById("btn-reflesh").style.display = "inline";
      document.getElementById("btn-next").style.display = "none";
      alert("Tamamlamış olduğun quiz sonuçları:\nDoğru sayısı ==> "+correct+"\nYanlış sayısı ==> "+incorrect)
    }
  }
  
  
  
  //---------------------------------------
  document.getElementById("countdown").style.display = "inline";
  document.getElementById("demo").style.display = "none";
  var timerstart = document.getElementById("btn-timer");
  timerstart.addEventListener("click",function()
  {
  var count=0;
  var speed = 1000;
   timer();
  // var speed = 1000;
  function timer()
  {
    count++;
    document.getElementById("btn-stop").style.display = "inline";
    document.getElementById("countdown").innerHTML=count ; // watch for      spelling
    document.getElementById("btn-timer").style.display = "none";
  
  let text = "    Metin Şentürk 2010 yılının Nisan ayında İngiliz görme engelli Mike Newman'a ait 284 kilometrelik Dünya Engelliler Hız Rekorunu GAP Havaalanında Guinness rekorlar kitabından gelen 3 gözlemci nezaretinde Ferrari marka F430 model otomobille 4 kilometre uzunluğundaki pisti yaklaşık 50 saniyede gidip döndü Şentürk'ün rekor sürüşü sırasında en yüksek hızının 303.62 kilometre olduğu ortalama hızın ise 292.89 kilometre olduğu bununla yeni dünya rekoru olarak tayin edileceği belirtildi";
  
        // let text = "    belki de hep savaşta gibi hiçbir zaman durmak istemiyor dünyaya bedel eşsiz ruhum dünyayı bilmek istemiyor";
        const chars = text.split(" ");
        for (i = 3; i < count; i++) {
          document.getElementById("demo").innerHTML = chars[i];
          document.getElementById("countdown").style.display = "none";
          document.getElementById("demo").style.display = "inline";
        }
        const timeout = setTimeout(timer, speed);
  
        // count++;
        if (count > text.split(" ").length) {
          // count = 0;
          document.getElementById("demo").style.display = "none";
          document.getElementById("btn-start").style.display = "inline";
          // document.getElementById("btn-replay").style.display = "inline";
          document.getElementById("btn-stop").style.display = "inline";
          document.getElementById("btn-stop").innerText = "Tekrar";
  
          clearTimeout(timeout);
          timer_on = 0;
          // count = 0;
          // return;
        }
    if (count == 3)
    {
       speed = 250
    }
     // or whatever
  
  
    // function iptal() {
    // }
  
    var stop = document.getElementById("btn-stop");
    stop.addEventListener("click",function()
    {
      clearTimeout(timeout);
      count = 0;
      timer_on = 0;
      speed = 1000;
      document.getElementById("demo").style.display = "none";
      document.getElementById("btn-replay").style.display = "inline";
      document.getElementById("btn-stop").style.display = "none";
      document.getElementById("btn-start").style.display = "none";
      if (count > text.split(" ").length) {
      document.getElementById("btn-replay").innerText = "Başla";
      }
    })
  
    var replay = document.getElementById("btn-replay");
    replay.addEventListener("click",function()
    {
        if (!timer_on) {
          timer_on = 1;
          timer();
        }
        speed = 1000;
        document.getElementById("countdown").style.display = "inline";
        document.getElementById("demo").style.display = "none";
      document.getElementById("btn-replay").style.display = "none";
      document.getElementById("btn-stop").innerText = "Dur";
    })
  
    }})
