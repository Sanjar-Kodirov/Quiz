const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correct = ['B','B','A','A'];


form.addEventListener('submit', e => {
  e.preventDefault();
  const userAnswear = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  let score = 0;
  correct.forEach((el, index)=>{
    if(el == userAnswear[index]){
      score += 25;
    }
  });
  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if(output === score){
      clearInterval(timer)
    }else{
      output++
    }
  }, 10);
  console.log(score)
  result.classList.remove('d-none')
  scrollTo(0,0);
});

/* let i = 0;
const timer = setInterval(() => {
  i++
  if(i == 60){
     clearInterval(timer)
  }
  console.log(i)
}, 1000); */