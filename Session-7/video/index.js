// counter
// const x = document.getElementById('btncong')
// let i=0;
// x.addEventListener('click', () => {
// const x = document.getElementById('results')
// {
//   i=i+1
//   x.textContent=i;
// }
// });

// const y = document.getElementById('btntru')
// y.addEventListener('click', () => {
// const y = document.getElementById('results')
// {
//   i=i-1
//   y.textContent=i;
// }
// });

// timer
// let timerDisplay = document.getElementById(`timer_display`);
// let numberInput = document.getElementById(`number_input`);
// let stopBtn = document.getElementById(`stop_button`);
// let startBtn = document.getElementById(`start_button`);
// let seconds, oneSecondsCountFunc;

// function timeOutCallback() {
//     if (seconds >= 0) {
//         timerDisplay.textContent = seconds--;
//         oneSecondsCount();
//     } else {
//         timerDisplay.textContent = `The time is up`;
//         stopBtn.disabled = true;
//         startBtn.disabled = false;
//     }
// }

// function oneSecondsCount() {
//     oneSecondsCountFunc = setTimeout(timeOutCallback, 1000);
// }

// function startButtonCallback() {
//     seconds = Number(numberInput.value);
//     timerDisplay.textContent = seconds;
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//     oneSecondsCount();
// }
// startBtn.addEventListener(`click`, startButtonCallback);

// function stopButtonCallback() {
//     clearTimeout(oneSecondsCountFunc);
//     stopBtn.disabled = true;
//     startBtn.disabled = false;
// }
// stopBtn.addEventListener(`click`, stopButtonCallback);
// timesheet
// const timeSheetData=[ 
//     {
//       Project:'Learn front-end',
//       Task:'Learn HTML',
//       TimeSpent :6, 
//     },
//      {
//       Project:'Learn front-end',
//       Task:'Learn CSS',
//       TimeSpent :8, 
//     },
//      {
//       Project:'Learn front-end',
//       Task:'Learn JS Variables and Data Types',
//       TimeSpent :6, 
//     },
//      {
//       Project:'Learn git',
//       Task:'Learn git basics',
//       TimeSpent :2, 
//     },
//     ]

// const d=document.getElementById('ts_body')
// console.log(d)

// 1->4
// const d=document.getElementById('ts_body')
//console.log(d)
// for(let i=0;i<timeSheetData.length;i++)
//   {
//     let row =
//             `<tr>
//     <td>${timeSheetData[i].Project}</td>
//     <td>${timeSheetData[i].Task}</td>
//     <td>${timeSheetData[i].TimeSpent}</td>
//     </tr>`;
//    d.insertAdjacentHTML('beforeend',`${row}`)
//   }
// 5->6
// const d=document.getElementById('ts_body')
// //console.log(d)
// for(let i=0;i<timeSheetData.length;i++)
//   {
//     let row =
//             `<tr>
//     <td>${timeSheetData[i].Project}</td>
//     <td>${timeSheetData[i].Task}</td>
//     <td>${timeSheetData[i].TimeSpent}</td>
//     </tr>`;
//    d.insertAdjacentHTML('beforeend',`${row}`)
//   }

// let add=document.getElementById('btn_add');
// add.addEventListener('click',addInformation)

// function addInformation(){
//  let x=document.getElementById('project').value;
//  let y=document.getElementById('task').value;
//  let z=document.getElementById('timespent').value;
// let Push={  Project:x,Task:y,TimeSpent :z };
//   timeSheetData.push(Push)
//     let addrow=         `<tr>
//     <td>${timeSheetData[(timeSheetData.length)-1].Project}</td>
//     <td>${timeSheetData[(timeSheetData.length)-1].Task}</td>
//     <td>${timeSheetData[(timeSheetData.length)-1].TimeSpent}</td>
//     </tr>`;
//    d.insertAdjacentHTML('beforeend',`${addrow}`)
//   console.log(addrow)
//     }

// const a = document.getElementById("reload")
// a.textContent = Math.random.length(a)
// a.addEventListener('click',()=> {
//     const a = document.getElementById('reload')
//     {console.log(Math.random.length(a))
//     }
    
// });
// const d = document.getElementById("msg")
// document.addEventListener("DOMContentLoaded", function (){const d = document.getElementById("msg")

//  console.log(d);})
