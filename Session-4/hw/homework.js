// Câu 1
console.log("Câu 1:")
const product = {
    name: `Xiaomi rice cooker`,
    price: 1700,
    brand: `Xiaomi`,
    color: `white`,
    };
    for (let x in product) {
    console.log(x);
    }
// a
console.log("A. x ở đây nhận các giá trị thuộc tính ")
//b
 console.log("B. ")
     for(let x in product)
       {
         console.log(product[x])
       }

// Câu 2:
console.log("Câu 2:")
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
              };
({dueDate,assignTo,subject} = task);
console.log(dueDate)
console.log(assignTo)
console.log(subject)

// Câu 3
console.log('Câu 3:')
console.log(' Kiểu dữ liệu của lớp ngoài cùng là đối tượng')
console.log(' Thuộc tính hits là array');
//Câu 4
//Câu 4.1
console.log('Câu 4:');
console.log('Câu 4.1:');
var x ={debug:'The process of figuring out why your program has a certain error and how to fix it',
    done:'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect:'The formal word for error ',
    pm:'The short version of Project Manager, the person in charge of the final result of a project',
    uiux:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
alert('hi there this is dev');
let p=prompt('Enter your keyword (debug, defect,done,pm,uiux)');
console.log(p)
  if (p =="debug")
    {
      alert('The process of figuring out why your program has a certain error and how to fix it');
    }
else if(p=="defect")
  {
    alert('The formal word for error')
  }
else if(p=="done")
  {
    alert('When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed')
  }
else if(p=="pm")
  {
    alert('The short version of Project Manager, the person in charge of the final result of a project')
  }
else if(p=="uiux")
  {
    alert('UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels')
  }
else
  {
    alert('we could not find your keyword ');
  }

// caau 4.2
console.log ('Cau 4.2:')
var x ={debug:'The process of figuring out why your program has a certain error and how to fix it',
    done:'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect:'The formal word for error ',
    pm:'The short version of Project Manager, the person in charge of the final result of a project',
    uiux:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
alert('hi there this is dev');
let q =prompt('Enter your keyword(debug,done,defect,pm,uiux)');
console.log(q)
// ({debug,done,defect,pm,uiux}= x);
// console.log(debug)
  if (q =="debug")
    {
      alert('The process of figuring out why your program has a certain error and how to fix it');
    
    }
else if(q=="defect")
  {
    alert('The formal word for error');
    
  }
else if(q=="done")
  {
    alert('When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed');
 
  }
else if(q=="pm")
  {
    alert('The short version of Project Manager, the person in charge of the final result of a project')

  }
else if(q=="uiux")
  {
    alert('UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels')

  }
else
  {
    let e=prompt('we could not find your keyword '+q+'leave your explanation');
    alert(`${e} 
    ${q}`)
  }

// Câu 5
console.log('Câu 5:')
let list = {}
Name = ['Xiaomi portable charger 20000mah','VSmart Active 1','IPhone X','Samsung Galaxy A9' ];
Brand = ['Xiaomi','VSmart','Apple','Samsung' ];
Price = ['428','5487','21490','8490'];
Color = ['White','Black','Gray','Blue'];
Category = ['Charger','Phone','Phone','Phone'];
list.Name = ['Xiaomi portable charger 20000mah','VSmart Active 1','IPhone X','Samsung Galaxy A9' ];
list.Brand = ['Xiaomi','VSmart','Apple','Samsung' ];
list.Price = ['428','5487','21490','8490'];
list.Color = ['White','Black','Gray','Blue'];
list.Category = ['Charger','Phone','Phone','Phone'];
console.log('Câu 5.1:')
for(let i=0;i<4;i++)
  {
     console.log('name: ' + Name[i])
    console.log('price: ' + Price[i])
  }
// //5.2
console.log('Câu 5.2:');
for(i=0;i<4;i++)
  {
     console.log('#'+(i+1)+'name: ' + Name[i])
    console.log('#'+(i+1)+'price: ' + Price[i])
  }

  let x =Number(prompt('enter your positionu want see'))
     console.log('name: ' + Name[x-1])
    console.log('price: ' + Price[x-1])
    console.log('brand '+Brand[x-1])
    console.log('color '+Color[x-1])
    console.log('category '+Category[x-1])
//5.3
console.log('Câu 5.3');
let y=prompt('enter your category')
if(y=='charger')
  {
    console.log('Name: '+Name[0])
    console.log('Price: ' +Price[0])
  }
else if(y=='phone')
{
  for(let i=1;i<Category.length;i++){
     console.log('Name: '+Name[i])
    console.log('Price: ' + Price[i])
  }
}
//5.4
console.log('Câu 5.4:')
let list = {}
Name = ['Xiaomi portable charger 20000mah','VSmart Active 1','IPhone X','Samsung Galaxy A9' ];
Brand = ['Xiaomi','VSmart','Apple','Samsung' ];
Price = ['428','5487','21490','8490'];
Color = ['White','Black','Gray','Blue'];
Category = ['Charger','Phone','Phone','Phone'];
Providers = ['PhukienzeroDientuccc', 'Tgdd Ddghn VhStore', 'Tgdd','Tgdd'];
list.Name = ['Xiaomi portable charger 20000mah','VSmart Active 1','IPhone X','Samsung Galaxy A9' ];
list.Brand = ['Xiaomi','VSmart','Apple','Samsung' ];
list.Price = ['428','5487','21490','8490'];
list.Color = ['White','Black','Gray','Blue'];
list.Category = ['Charger','Phone','Phone','Phone'];
list.Providers = ['PhukienzeroDientuccc', 'Tgdd Ddghn VhStore', 'Tgdd','Tgdd'];
for (i=0; i <5; i++){
  console.log("#" +(i+1)+'name: '+ Name[i])
  console.log("#" +(i+1)+'price: '+ Price[i])
  console.log("#" +(i+1)+'provider: '+ Providers[i])
}
//5.5 EM THAM KHAO CUA BAN DO TIEN THANH
console.log ('Câu 5.5:')
let d = prompt("Enter provider");
if (d == "phukienzezo" || d == "dientuccc") {
  console.log(
    `Name: ${a[0].name}\n
    Brand: ${a[0].brand}\n
    Price: ${a[0].price}\n
    Color: ${a[0].color}\n
    Category: ${a[0].category}\n
    Providers: ${a[0].Providers}`
  );
} else if (d == "tgdd") {
  for (let i = 1; i < a.length; i++) {
    console.log("\n------------------------");
    console.log(
      ` Name: ${a[i].name}\n
        Brand: ${a[i].brand}\n
        Price: ${a[i].price}\n
        Color: ${a[i].color}\n
        Category: ${a[i].category}\n
        Providers: ${a[i].Providers}`
    );
  }
} else if (d == "ddggb" || d == "vhstore") {
  console.log(
    `Name: ${a[1].name}\n
     Brand: ${a[1].brand}\n
     Price: ${a[1].price}\n
     Color: ${a[1].color}\n
     Category: ${a[1].category}\n
     Providers: ${a[1].Providers}`
  );
}
// Câu 6:
console.log('Câu 6:');
Task ={};
Learn = ['HTML', 'CSS', 'BoJ', 'NPM', 'Git'];
Complete = ['false', 'false', 'false', 'false', 'false'];
Task.Learn = ['HTML', 'CSS','BoJ', 'NPM', 'Git'];
Task.Complete = ['false','false', 'false', 'false', 'flase'];
for (i=0; i<5; i++){
  console.log(Learn[i]);
  console.log('complete : '+Complete[i])
}
let p = prompt(' Enter your command (New, Delete, Update, Complete');
let c = prompt(' Enter new Task')
Learn.push(c)
for ( i=0; i<Learn.length; i++){
  console.log(Learn[i])
  console.log('complete : False')
}
while (true)
{
  let p = prompt('Enter your command(New, Delete, Update, Complete)');
  if(p==null)
  {
    alert('goodbye!!!')
    break;
  }
  else if (p=='New')
  {
    let n=prompt('Enter new task')
    Learn.push(n)
    Complete.push(false)
  }
  else if(p=='Update')
  {
    let positions = Number(prompt('let enter your position'));
    let title = prompt('Enter a new title')
    Learn[(positions-1)]=title;
  }
  else if(p=='Complete')
  {
    let update = Number(prompt('enter position'))
    Complete[(update-1)]= True;
  }
  else if(p=='Delete')
 {
   let del = Number(prompt('enter position u want delete'))
   Learn.splice((del-1),1)
   Complete.splice((del-1),1)
 }
for (i=0; i<Learn.length;i++)
{
  console.log('#'+ (i+1)+ Learn[i])
  console.log(Complete[i])
}
}

// Câu 7:
console.log('Câu 7:Move the tutle to the provided position, use penup() and pendown() to Not leave any traces');
clean();
const pos = {
x: 200,
y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
// Câu 8:
console.log('Câu 8:draw a square at position (x, y) with size width');
clear();
const pos = {
x: 100,
y: 50,
w: 20,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
// Câu 9:
console.log('Câu 9: draw a rectangle at position (x, y) with size width and height');
const pos = {
  x: 100,
  y: 50,
  w: 20,
  h: 40
  };
  penup();
  rt(90);
  fd(pos.x);
  lt(90);
  fd(pos.y);
  for (let i=0; i<2; i++)
  {
  pendown();
    fd(pos.w);
    rt(90);
    fd(pos.h);
    rt(90);
  }
// Câu 10:
console.log('Câu 10:draw data')
console.log('draw rect 10.1');
const pos = {
shape: 'rect',
x: 8,
y: 70,
w: 12,
h: 40
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('draw square 10.2');
const pos = {
  shape: 'square',
  x: 20,
  y: 40,
  w: 50,
  };
  penup();
  lt(90);
  fd(pos.x);
  rt(90);
  fd(pos.y);
  for (let i=0; i<4; i++)
  {
  pendown();
    fd(pos.w);
    rt(90);
  }
console.log('draw rect 10.3');
home()
const pos = {
shape: 'rect',
x: 70,
y: 70,
w: 12,
h: 40,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('draw rect 10.4');
home()
const pos = {
shape: 'rect',
x: 10,
y: 20,
w: 70,
h: 20,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('draw square 10.5');
clear()
const pos = {
shape: 'square',
x: 25,
y: 40,
w: 14,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('draw square 10.6');
clear()
const pos = {
shape: 'square',
x: 33,
y: 42,
w: 6,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('draw square 10.7');
clear()
const pos = {
shape: 'square',
x: 50,
y: 40,
w: 14,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('draw square 10.8');
clear()
const pos = {
shape: 'square',
x: 58,
y: 42,
w: 6,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('draw square 10.9');
clear()
const pos = {
shape: 'square',
x: 40,
y: 25,
w: 8,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
};
console.log('draw square 10.10');
clear()
    const pos = {
x: 50,
y: 50,
w: 15,
penWidth: 1,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
// Câu 11:
console.log('Câu 11: draw circle');
clear()
      const pos = {
x: 100,
y: 50,
r: 30,
};
penup();
rt(90);
fd(pos.x);
rt(90);
fd(pos.y);
pendown();
for (let i=1; i<=pos.r; i++)
  {
    fd(15);
    rt(360/pos.r);
  }
// Câu 12:
console.log('Câu 12: draw data');
console.log('12.1')
clear()
      const pos = {
x: 0,
y: -20,
r: 60,
};
penup();
rt(90);
fd(pos.x);
rt(90);
fd(pos.y);
pendown();
for (let i=1; i<= pos.r; i++)
  {
    fd(15);
    rt(360/pos.r);
  }
console.log('12.2');
clear()
      const pos = {
x: 0,
y: 80,
r: 40,
};
penup();
rt(90);
fd(pos.x);
rt(90);
fd(pos.y);
pendown();
for (let i=1; i<= pos.r; i++)
  {
    fd(15);
    rt(360/pos.r);
  }
console.log('12.3');
clear()
      const pos = {
x: -75,
y: 10,
r: 20,
};
penup();
rt(90);
fd(pos.x);
rt(90);
fd(pos.y);
pendown();
for (let i=1; i<= pos.r; i++)
  {
    fd(15);
    rt(360/pos.r);
  }
console.log('12.4');
clear()
      const pos = {
x: 75,
y: 10,
r: 20,
};
penup();
rt(90);
fd(pos.x);
rt(90);
fd(pos.y);
pendown();
for (let i=1; i<= pos.r; i++)
  {
    fd(15);
    rt(360/pos.r);
  }
console.log('12.5');
clear()
    const pos = {
x: -65,
y: -100,
w: 30,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('12.6');
clear()
    const pos = {
x: 38,
y: -100,
w: 30,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
}
console.log('12.7');
home()
const pos = {
shape: 'rect',
x: -30,
y: 80,
w: 20,
h: 4,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('12.8');
home()
const pos = {
shape: 'rect',
x: 10,
y: 80,
w: 20,
h: 4,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('12.9');
home()
const pos = {
shape: 'rect',
x: -10,
y: 50,
w: 20,
h: 6,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('12.10');
clear()
const pos = {
shape: 'square',
x: 500,
y: 500,
w: 20,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<4; i++)
{
pendown();
  fd(pos.w);
  rt(90);
};
// Câu 15:
console.log('Câu 15:');
let jobData =
  {
    hits: [
        {
            benefits: [
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
                    benefitId: 1
                },
                {
                    benefitIconName: 'fa-user-md',
                    benefitName: 'Healthcare Plan',
                    benefitValue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
                    benefitId: 2
                },
                {
                    benefitIconName: 'fa-file-image-o',
                    benefitName: 'Paid Leave',
                    benefitValue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
                    benefitId: 3
                }
            ],
            expiredDate: 1572713999,
            classifiedConfidenceRoles: [
                0.478965416077008,
                0.461663685615174
            ],
            visibilityDisplay: 1,
            jobTitle: '02 JAVA Web Developer (Hà Nội)',
            categoryVIs: [
                'Công nghệ cao',
                'IT - Phần mềm',
                'Internet/Online Media'
            ],
            priorityOrder: 1570593423,
            salaryMax: 1000,
            skills: [
                'Hibernate',
                'Spring MVC',
                'JavaScript',
                'Struts',
                'Spring Boots'
            ],
            isSalaryVisible: true,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            isShowLogoInSearchResult66: true,
            alias: '02-java-web-developer-ha-noi-1-1-1-1',
            company: 'Yumeshin Vietnam',
            categories: [
                'Internet/Online Media',
                'High Technology',
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009111048',
            priorityOrder35: 1570593423,
            priorityOrder57: 1570593423,
            locationVIs: [
                'Hà Nội'
            ],
            classifiedRoles: [
                'Developer',
                'Backend Developer'
            ],
            jobSalary: 1000,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/8c/10756982.png',
            locationIds: [
                24
            ],
            jobLevelId: 5,
            userId: 5531713,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570593423,
            jobId: 1170673,
            companyId: 298378,
            categoryIds: [
                66,
                35,
                57
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            priorityOrder66: 1570593423,
            locations: [
                'Ha Noi'
            ],
            jobDescription: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
            isShowLogoInSearchResult35: true,
            isShowLogoInSearchResult57: true,
            publishedDate: 1570075024,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
            _geoloc: {
                lng: 105.7837524,
                lat: 21.0168415
            },
            objectID: '1170673',
            _highlightResult: {
                jobTitle: {
                    value: '02 JAVA <em>Web</em> <em>Developer</em> (Hà Nội)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Hibernate',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring MVC',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'JavaScript',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Struts',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring Boots',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Yumeshin Vietnam',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Triển khai các ứng dụng trên nền tảng Java theo yêu cầu của khách hàng;\n- Tham gia vào quá trình phân tích, thiết kế, phát triển và bảo trì hệ thống;\n- Trực tiếp viết mã nguồn và thực hiện Unit test sản theo tài liệu thiết kế từ đội BA;\n- Tạo thiết kế chi tiết và viết các tài liệu kỹ thuật khi được yêu cầu;\n- Xác định mục tiêu và giải pháp thông qua việc phân tích yêu cầu người dùng, hình dung các tính năng và chức năng của hệ thống;\n- Tham gia vào các hoạt động review tài liệu thiết kế cũng như mã nguồn;',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobRequirement: {
                    value: '- Có ít nhất 1 năm kinh nghiệm trong lĩnh vực phát triển phần mềm với ngôn ngữ Java;\n- Nắm vững về phương pháp lập trình hướng đối tượng (OOP); có hiểu biết về Clean Code rules và Design Pattern;\n- Hiểu biết về UML;\n- Có kinh nghiệm làm việc với các framework của Java như Spring MVC, Spring Boots, Struts, Hibernate, JSF\n- Có kinh nghiệm làm việc với 1 trong số các framework của Javascript như: AngularJS, EmberJS, BackboneJS…;\n- Có kinh nghiệm làm việc với NodeJS, Grunt, Gulp là lợi thế;\n- Có kinh nghiệm làm việc với MySQL/MariaDB, MongoDB, Redis;\n- Sử dụng Source Version Control (Github) thành thạo;\n- Khả năng giao tiếp và làm việc nhóm tốt, có khả năng đọc hiểu tài liệu tiếng Anh tốt\n- Biết tiếng Nhật là một lợi thế;\n- Tinh thần trách nhiệm cao, cẩn thận và tỉ mỉ trong công việc;\n\n\nWhat we can offer       \n- Mức lương: Mức lương hấp dẫn, phù hợp với năng lực làm việc;\n- Giờ làm việc: 8:30 ~ 17:30, 5 ngày/ tuần; nghỉ Thứ 7, CN và các ngày nghỉ lễ theo quy định; có chế độ đầy đủ khi cần phải thêm ngoài giờ (over-time)\n- Tiền thưởng: 2 lần một năm (tổng tương đương 2 tháng lương);\n- Đánh giá tăng lương: 2 lần / năm dựa trên thành tích và đóng góp của nhân viên;\n- Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty;\n- Được khám sức khỏe định kỳ 1 lần/ năm;\n- Hàng tháng có tổ chức team building;  \n- Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến\n- Các lợi ích khác theo quy định của Luật Lao động Việt Nam;',
                    matchLevel: 'none',
                    matchedWords: []
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Tham gia các khoá đào tạo Quản lý, Kỹ năng mềm',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-plane',
                    benefitName: 'Travel Opportunities',
                    benefitValue: 'Company Trip hàng năm (Đã đi: Côn Đảo, Phú Quốc, Sapa,..), Khám sức khoẻ ĐK tại Victoria HealthCare',
                    benefitId: 9
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Lương thưởng theo năng lực',
                    benefitId: 1
                }
            ],
            expiredDate: 1572627599,
            classifiedConfidenceRoles: [
                0.704634290870941,
                0.198554087716295
            ],
            visibilityDisplay: 0,
            jobTitle: 'Android Developer (Fresher/junior & Senior)',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570591715,
            salaryMax: 0,
            skills: [
                'Java',
                'Android Ndk',
                'Android Sdk',
                'Web Sevice',
                'Lập Trình Android'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'android-developer-fresher-junior-senior-1-1-1',
            company: 'ARIS Vietnam Co., Ltd',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009102846',
            priorityOrder35: 1570591715,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Mobile Developer',
                'Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/40/6215187.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 2484337,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570591715,
            jobId: 1170146,
            companyId: 114113,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1569986916,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với Web services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
            objectID: '1170146',
            _highlightResult: {
                jobTitle: {
                    value: 'Android <em>Developer</em> (Fresher/junior & Senior)',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Java',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Android Ndk',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Android Sdk',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Sevice',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    {
                        value: 'Lập Trình Android',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'ARIS Vietnam Co., Ltd',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: 'Chi tiết công việc trao đổi thêm khi phỏng vấn.',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobRequirement: {
                    value: '- Tốt nghiệp các trường Đại học chuyên ngành công nghệ thông tin hoặc điện tử viễn thông.\n- Kiến thức vững về OOP, Design patterns.\n- Nắm vững ngôn ngữ lập trình Java, am hiểu về Android SDK và NDK.\n- Ưu tiên ứng viên fresher hoặc 1-2 năm kinh nghiệm phát triển ứng dụng cho nền tảng Android (đối với Senior).\n- Có kinh nghiệm làm việc với <em>Web</em> services (sử dụng JSON, REST, SOAP)\n- Có kinh nghiệm sử dụng ít nhất 1 hệ quản trị cơ sở dữ liệu như My SQL, SQL Server.\n- Có kinh nghiệm ít nhất 2 năm trở lên với vị trí tương đương (đối với senior).\n- Kỹ năng đọc/viết tài liệu kỹ thuật và giao tiếp tốt bằng tiếng Anh hoặc tiếng Nhật.\n- Ưu tiên ứng viên biết tiếng Nhật, đã làm việc tại Nhật hoặc có kinh nghiệm làm việc với đối tác Nhật Bản.\n- Có khả năng làm việc tự chủ và kỹ năng làm việc theo nhóm. Khả năng nắm bắt, học hỏi kỹ thuật mới nhanh.\n- Hoà đồng, sẵn sàng hợp tác cùng với mọi người để hoàn thành mục tiêu chung.\n- Siêng năng, có tinh thần cầu tiến.\n- Có tinh thần trách nhiệm cao ( với công việc, với khách hàng, với thành viên của Team và với chính mình)',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-plane',
                    benefitName: 'Travel Opportunities',
                    benefitValue: 'Cơ hội On-site tại Mỹ, Nhật Bản',
                    benefitId: 9
                },
                {
                    benefitIconName: 'fa-glass',
                    benefitName: 'Team Activities',
                    benefitValue: 'Tham gia các kỳ nghỉ, các hoạt động tập thể của công ty như: bóng đá, cầu lông...',
                    benefitId: 10
                }
            ],
            expiredDate: 1573059599,
            classifiedConfidenceRoles: [
                0.625407761567872,
                0.348106187241412
            ],
            visibilityDisplay: 1,
            jobTitle: 'Nhân Viên Lập Trình Web - Web Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590574,
            salaryMax: 1000,
            skills: [
                'Docker Swarm',
                'PHP',
                'MVC',
                'Nodejs'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'nhan-vien-lap-trinh-web-web-developer-1-1',
            company: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
            categories: [
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009101153',
            priorityOrder35: 1570590574,
            locationVIs: [
                'Hà Nội'
            ],
            classifiedRoles: [
                'Backend Developer',
                'Developer'
            ],
            jobSalary: 1000,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/ca/10211305.png',
            locationIds: [
                24
            ],
            jobLevelId: 5,
            userId: 3735175,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590574,
            jobId: 1171835,
            companyId: 204566,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.955278194281585,
                0.0277846614949552
            ],
            locations: [
                'Ha Noi'
            ],
            jobDescription: '- Phát triển các tính năng, giải pháp phần mềm dạng Web cho lĩnh vực CAD/BIM xây dựng',
            isShowLogoInSearchResult35: true,
            publishedDate: 1570417775,
            isPremium: false,
            classifiedSkills: [
                'Web Design',
                'HTML/CSS'
            ],
            jobRequirement: '•\tCó kinh nghiệm lập trình các ứng dụng Web, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
            _geoloc: {
                lng: 105.7824599,
                lat: 21.030345
            },
            objectID: '1171835',
            _highlightResult: {
                jobTitle: {
                    value: 'Nhân Viên Lập Trình <em>Web</em> - <em>Web</em> <em>Developer</em>',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Docker Swarm',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'PHP',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'MVC',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Nodejs',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Công Ty TNHH Giải Pháp Tích Hợp Cad Hài Hòa',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Phát triển các tính năng, giải pháp phần mềm dạng <em>Web</em> cho lĩnh vực CAD/BIM xây dựng',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                },
                jobRequirement: {
                    value: '•\tCó kinh nghiệm lập trình các ứng dụng <em>Web</em>, bất cứ ngôn ngữ gì.\n•\tƯu tiên các ứng viên thạo một trong các nội dung sau:\no\tPHP\no\tNodeJs\no\tCó kinh nghiệm với MVC, OOP, thiết kế đáp ứng.\no\tCó kinh nghiệm với Bootstrap, jQuery, LESS, SCSS, Photoshop \no\tES6, VueJS, AngularJS, React.\no\tJava, C #, ASP.NET, MSSQL, NoSQL.\n•\tCó khả năng đọc tài liệu tiếng Anh chuyên ngành \n•\tCó kỹ năng làm việc theo nhóm\n•\tTinh thần trách nhiệm và năng động của tuổi trẻ, khao khát được thể hiện mình, tinh thần của 1 chiến binh sẵn sàng đương đầu mọi khó khăn thử thách, sẳn sàng chiến thắng. Sẵn sàng làm bất cứ nhiệm vụ nào được giao\n\nQuyền lợi được hưởng :\n•\tNgày nghỉ hàng tuần: chiều thứ 7, chủ nhật và các ngày lễ theo quy định.\n•\tTăng lương theo hiệu quả công tác và cam kết đầy đủ các chế độ dành cho người lao động theo như quy định pháp luật hiện hành (BHXH, BHYT, BHTN…).\n•\tLương tháng 13 + thưởng \n•\tCác chế độ phúc lợi theo quy chế của công ty\n•\tCơ hội được học hỏi, đào tạo và thăng tiến\n•\tĐược tham gia các hoạt động ngoại khóa: văn nghệ, thể thao, du lịch của Công ty',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Continuous learning and career growth',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-trophy',
                    benefitName: 'Awards',
                    benefitValue: 'Exciting challenges and rewarding recognitions',
                    benefitId: 5
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Creative workplace with international teams of talents',
                    benefitId: 1
                }
            ],
            expiredDate: 1571331599,
            classifiedConfidenceRoles: [
                0.495064760020936,
                0.376693534151077
            ],
            visibilityDisplay: 0,
            jobTitle: 'Senior Front-End Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590355,
            salaryMax: 0,
            skills: [
                'Software Engineering',
                'HTML5',
                'Front-End',
                'Web Development',
                'Angular'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'senior-front-end-developer-109',
            company: 'Gameloft',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009101055',
            priorityOrder35: 1570590355,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Frontend Developer',
                'Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 407579,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590355,
            jobId: 1162710,
            companyId: 1706,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.525817725191519,
                0.168757187821785
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Front-End Developer to join our team of developers; working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End Developer works with web developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end web technologies.\r\n•\tGood understanding of Web analytics and SEO techniques and how to implement them.\r\n•\tOptimizes web applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568689556,
            isPremium: false,
            classifiedSkills: [
                'JavaScript',
                'HTML/CSS'
            ],
            jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for Web sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive Web Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
            objectID: '1162710',
            _highlightResult: {
                jobTitle: {
                    value: 'Senior Front-End <em>Developer</em>',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Software Engineering',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'HTML5',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Front-End',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Development',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    },
                    {
                        value: 'Angular',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Gameloft',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Front-End <em>Developer</em> to join our team of developers; working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Front-End <em>Developer</em> works with <em>web</em> developers and back-end coder and is technically responsible for the overall quality, security and development of the online user experience.  To this extent, proofreading skills and an all-around attention to detail is vital, in order to provide all target users a high-quality & efficient experience.\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tMust have strong knowledge of front-end <em>web</em> technologies.\r\n•\tGood understanding of <em>Web</em> analytics and SEO techniques and how to implement them.\r\n•\tOptimizes <em>web</em> applications to ensure they are rendered consistently and efficiently in a cross-browser environment\r\n•\tSupport the development team to boost website security and propose initiatives to deliver full website performance and optimization.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface or new technologies.\r\n•\tAnalyzes customer requirements and defines front-end solutions while providing assistance to the team for any problem and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is a must\r\n•\tKnowledge on any CMS (Content Management System) template will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidates must possess at least a Bachelor’s degree, preferably in Computer Science/Information Technology or equivalent\r\n•\t3+ years developing front-end and user interface code for <em>Web</em> sites and mobile apps \r\n•\tFamiliarity with the latest mobile UI and UX design patterns\r\n•\tMust have strong knowledge of the following technologies and languages\r\n+\tResponsive <em>Web</em> Design\r\n+\tHTML5, Advanced HTML (Canvas, SVG)\r\n+\tCSS Pre-processors (SASS)\r\n+\tCSS Framework (Bootstrap)\r\n+\tCSS3 Animation\r\n+\tDOM Manipulation frameworks such as jQuery\r\n+\tJS frameworks (Angular, Node, React)\r\n•\tHas experience using \r\n+\tversion control tools such as Git Bash and Tortoise SVN\r\n+\tShell scripts and FTP/SFTP/SSH\r\n+\tJSON and REST APIs',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Continuous learning and career growth',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-trophy',
                    benefitName: 'Awards',
                    benefitValue: 'Exciting challenges and rewarding recognitions',
                    benefitId: 5
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Creative workplace with international teams of talents',
                    benefitId: 1
                }
            ],
            expiredDate: 1571331599,
            classifiedConfidenceRoles: [
                0.419200043232248,
                0.256194138237985
            ],
            visibilityDisplay: 0,
            jobTitle: 'Senior PHP Developer',
            categoryVIs: [
                'IT - Phần mềm'
            ],
            priorityOrder: 1570590318,
            salaryMax: 0,
            skills: [
                'Software Engineering',
                'Back-End',
                'PHP',
                'Scrum',
                'Web Development'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            alias: 'senior-php-developer-189',
            company: 'Gameloft',
            categories: [
                'IT - Software'
            ],
            salaryMin: 300,
            timestamp: '20191009101044',
            priorityOrder35: 1570590318,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Engineering Manager',
                'Backend Developer'
            ],
            jobSalary: 300,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/e0/4079410.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 407579,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590318,
            jobId: 1162711,
            companyId: 1706,
            categoryIds: [
                35
            ],
            classifiedConfidenceSkills: [
                0.350894457428986,
                0.202624349623947
            ],
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '*Job Purpose:\t\t\r\nThe Global Web Marketing team has an exciting opportunity for a Back-End Developer to join our team of developers, working on creating best-in-class web-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End Developer is responsible for server-side web application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic web applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform web and legacy system development, update and support.\r\n•\tInitiate and lead development of internal web tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568689519,
            isPremium: false,
            classifiedSkills: [
                'PHP',
                'Java'
            ],
            jobRequirement: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
            _geoloc: {
                lng: 106.7131842,
                lat: 10.8090852
            },
            objectID: '1162711',
            _highlightResult: {
                jobTitle: {
                    value: 'Senior PHP <em>Developer</em>',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Software Engineering',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Back-End',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'PHP',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Scrum',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: '<em>Web</em> Development',
                        matchLevel: 'partial',
                        fullyHighlighted: false,
                        matchedWords: [
                            'web'
                        ]
                    }
                ],
                company: {
                    value: 'Gameloft',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '*Job Purpose:\t\t\r\nThe Global <em>Web</em> Marketing team has an exciting opportunity for a Back-End <em>Developer</em> to join our team of developers, working on creating best-in-class <em>web</em>-based products supporting the company’s marketing efforts (consumer and corporate sites, customer care, forum, game sites, campaign sites and newsletters).\r\nAn Intermediate Back-End <em>Developer</em> is responsible for server-side <em>web</em> application logic and works hand in hand with the Front-End Developers on integration. He develops scripts and implements coding for various websites and applications using PHP to create dynamic <em>web</em> applications\r\n\r\nMain Responsibilities:  \r\n•\tPerform <em>web</em> and legacy system development, update and support.\r\n•\tInitiate and lead development of internal <em>web</em> tools and application, design and build back-office system from scratch.\r\n•\tDelivery high level solutions or subsystems like custom API’s, database modeling and design.\r\n•\tContribute to continuous improvement by suggesting improvement to user interface, software architecture or new technologies.\r\n•\tWork with the team manager to conduct performance reviews as well as hiring plans.\r\n•\tAnalyzes customer requirements and defines solutions and architecture plus assistance to the team on problems and technical roadblocks. \r\n•\tRecommends new technologies and development strategies\r\n•\tCoordinate roll-out of new applications\r\n•\tProvides production support\r\n•\tPerforms other duties that maybe assigned from time to time.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '1.\tYou’re :\r\n•\tMust display excellent leadership potential coupled with solid work ethic.\r\n•\tAbility to communicate clearly and concisely, both orally and in writing.\r\n•\tStrong analytical and problem solving skills.\r\n•\tKnowledge of basic project management methodology.\r\n•\tKnowledge in Scrum and Kanban is must.\r\n•\tKnowledge on any CMS (Content Management System) will be plus\r\n\r\n2.\tQualifications and Experiences:\r\n•\tCandidate must possess at least a Bachelor\'s/College Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication) or equivalent.\r\n•\tAt least 3 year(s) of working experience in the related field, preferably 2 years & up experienced in full stack PHP Development\r\n•\tHas strong knowledge of the following technologies and languages\r\no\tFull stack PHP development\r\no\tXAMP or WAMP stack and each of its core components.\r\no\tPHP Frameworks such as Zend Framework or Code-igniter.\r\n•\tHas experience using \r\no\tJSON and REST APIs\r\no\tVersion control tools such as Git Bash and Tortoise SVN.\r\no\tFTP/SFTP/SSH/Shell scripts\r\n•\tHas good experience with front-end code \r\no\tHTML, CSS, JavaScript (JS)\r\no\tDOM Manipulation frameworks such as jQuery\r\no\tJS frameworks (Angular, Node, React)',
                    matchLevel: 'none',
                    matchedWords: []
                }
            }
        },
        {
            benefits: [
                {
                    benefitIconName: 'fa-check-square-o',
                    benefitName: 'Others',
                    benefitValue: 'Dynamic & Friendly working environment',
                    benefitId: 15
                },
                {
                    benefitIconName: 'fa-graduation-cap',
                    benefitName: 'Training',
                    benefitValue: 'Overseas Training',
                    benefitId: 4
                },
                {
                    benefitIconName: 'fa-dollar',
                    benefitName: 'Bonus',
                    benefitValue: 'Competitive salary and bonus up to 300%',
                    benefitId: 1
                }
            ],
            expiredDate: 1571417999,
            classifiedConfidenceRoles: [
                0.424526788682568,
                0.280813874503942
            ],
            visibilityDisplay: 1,
            jobTitle: '[URGENT] Web Developer',
            categoryVIs: [
                'Công nghệ cao',
                'IT - Phần mềm',
                'IT-Phần cứng/Mạng'
            ],
            priorityOrder: 1570590222,
            salaryMax: 1500,
            skills: [
                'Java',
                'Weblogic',
                'Restful Api',
                'HTML',
                'Spring'
            ],
            isSalaryVisible: false,
            isShowLogoInSearchResult: true,
            jobLevelVI: 'Nhân viên',
            isShowLogo: true,
            isPriorityJob: false,
            isShowLogoInSearchResult66: true,
            alias: 'urgent-web-developer-2-1',
            priorityOrder55: 1570590222,
            company: 'Shinhan DS Vietnam Company Limited',
            categories: [
                'IT - Hardware/Networking',
                'High Technology',
                'IT - Software'
            ],
            salaryMin: 500,
            timestamp: '20191009101028',
            priorityOrder35: 1570590222,
            locationVIs: [
                'Hồ Chí Minh'
            ],
            classifiedRoles: [
                'Frontend Developer',
                'Backend Developer'
            ],
            jobSalary: 1500,
            companyLogo: 'https://images.vietnamworks.com/pictureofcompany/92/10668657.png',
            locationIds: [
                29
            ],
            jobLevelId: 5,
            userId: 5191438,
            jobLevel: 'Experienced (non-manager)',
            onlineDate: 1570590222,
            jobId: 1163358,
            companyId: 284536,
            categoryIds: [
                66,
                35,
                55
            ],
            classifiedConfidenceSkills: [
                0.549274909799395,
                0.197273371406292
            ],
            isShowLogoInSearchResult55: true,
            priorityOrder66: 1570590222,
            locations: [
                'Ho Chi Minh'
            ],
            jobDescription: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was Developer).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to Web Developers and Maintain Administrator Web page.\r\n- Contribute to develop Web application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
            isShowLogoInSearchResult35: true,
            publishedDate: 1568775822,
            isPremium: false,
            classifiedSkills: [
                'Java',
                'HTML/CSS'
            ],
            jobRequirement: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for Web Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
            _geoloc: {
                lng: 106.6974318,
                lat: 10.7827533
            },
            objectID: '1163358',
            _highlightResult: {
                jobTitle: {
                    value: '[URGENT] <em>Web</em> <em>Developer</em>',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                skills: [
                    {
                        value: 'Java',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Weblogic',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Restful Api',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'HTML',
                        matchLevel: 'none',
                        matchedWords: []
                    },
                    {
                        value: 'Spring',
                        matchLevel: 'none',
                        matchedWords: []
                    }
                ],
                company: {
                    value: 'Shinhan DS Vietnam Company Limited',
                    matchLevel: 'none',
                    matchedWords: []
                },
                jobDescription: {
                    value: '- Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific development (Was <em>Developer</em>).\r\n- Responsible for implementing, customizing, maintaining & debugging software solution.\r\n- Support to <em>Web</em> Developers and Maintain Administrator <em>Web</em> page.\r\n- Contribute to develop <em>Web</em> application for Internet banking, Mobile Banking Team.\r\n- Responsible for test & product review.\r\n- Understand client requirements and how to create framework from customers. \r\n- Contribute in system integration, fixing of bugs reported by customer.\r\n- START WORKING: September, 2019',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web',
                        'developer'
                    ]
                },
                jobRequirement: {
                    value: '- Graduate college or university with major Information Technology, Computer Science, Software Engineering or related fields. \r\n- Have 3 - 5 year experience in Weblogic, Spring Framework, Rest API, Java, HTML, Javascript\r\n- Experience having for <em>Web</em> Development in Banks, Finance, Sales is preferable.\r\n- Be able to communicate in English \r\n- Self-learning skill, well-organized, logic thinking, high sense of responsibility.\r\n- Good technical skill - Good working attitude - Long-term working',
                    matchLevel: 'partial',
                    fullyHighlighted: false,
                    matchedWords: [
                        'web'
                    ]
                }
            }
        }
    ]
}
console.log('15.1:');
console.log('job hit: ');
console.log(jobData);
console.log('15.2:');
console.log(jobData.hits[0]);
console.log('15.3:');
console.log(jobData.hits[0].jobTitle);
console.log('15.4:');
console.log(jobData.hits[0].benefits);
console.log('15.5:');
console.log('First job hit benefits')
for(i=0; i<3; i++)
{
  console.log(jobData.hits[0].benefits[i].benefitValue)
}
console.log('15.6:');
for(i=0;i<6;i++)
{
console.log(jobData.hits[i]._highlightResult.jobTitle.value);
console.log('Benefits');
for(m=0;m<jobData.hits[i].benefits.length;m++)
{
console.log('-'+jobData.hits[i].benefits[m].benefitValue);
  }
}
console.log('15.7:');
for(i=0;i<6;i++)
{
console.log(jobData.hits[i]._highlightResult.jobTitle.value);
console.log('Benefits');}
for(m=0;m<jobData.hits[i].benefits.length;m++)
{
console.log('-'+jobData.hits[i].benefits[m].benefitValue);
}

// Câu 16:
{console.log('Câu 16:')
const oldData = {
  firedRice: {
      Price: 30,
      vnName: `Com rang dua bo`,
  },
  noddle: {
      price: 20,
      vnName: `My tom chanh`,
  },
  pho: {
      price: 35,
      vnName: `Pho bo tai chin`,
  },
  };
console.log(oldData);
delete oldData.noddle;
let {firedRice, pho} = oldData;
let newData = {};
newData = {firedRice, pho}
console.log(newData)
}