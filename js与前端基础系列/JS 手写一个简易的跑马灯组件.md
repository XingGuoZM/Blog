
### 功能需求  
自动循环滚动


### 技术方案  
- 方案一：transform + transition

### 实现代码  
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>marquee</title>
        <style>
            .marquee-wrap{
              width:100%;
              height:100px;
              background-color:#f2f2f2;
              display:flex;
              flex-direction: column;
              overflow:hidden;
            }
            .marquee-item{
              width:100%;
              height:100px;
              font-size:50px;
              font-weight: bolder;
              display: flex;
              justify-content: center;
              align-items: center;
              color:red;
            }
        </style>
    </head>
    <body>
        <section class='marquee-wrap'>
          <div id='marquee'>
            <div class="marquee-item">111</div>
            <div class="marquee-item">222</div>
            <div class="marquee-item">333</div>
            <div class="marquee-item">111</div>
          </div>
        </section>
        <script>
          let marquee=document.querySelector('#marquee');
          let percent=0;
          let num=0;
          let len = 4;

          window.setInterval(() => {
            percent=num % len / len * 100;
            if (num % len === len - 1) {
              window.setTimeout(() => {
                marquee.style.transform='translate3d(0, 0, 0)' 
                marquee.style.transition= 'none'
                num+=1
              }, 800);
            }
            num += 1;
            marquee.style.transform=`translate3d(0, -${percent}%,0)`
            marquee.style.transition='transform .8s ease'
          }, 1000);
        </script>
    </body>
</html>
```  

### 参考  