
### 功能需求  


### 技术方案  


### 实现代码  
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>热区</title>
        <style>
            *{
              margin:0;
              padding:0;
            }
        </style>
    </head>
    <body>
        <div id='root'></div>
        <script>
            function renderHot(left,top,width,height){
                let hot = document.createElement('a');
                hot.style.position='absolute';
                hot.style.width=width;
                hot.style.height = height;
                hot.style.top = top;
                hot.style.left = left;
                hot.style.backgroundColor = '#ccc';
                hot.href = 'http://baidu.com';
                document.body.appendChild(hot);
            }

            renderHot('0px','0px','100px','100px')

        </script>
    </body>
</html>
```

### 参考  
