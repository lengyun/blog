# 数组去重复

## 创建数组

```js
let arr = Array.from({ length: 20 }, () => Math.random() * 10 | 0)
console.log(arr)
```

## 向前循环比较

```js
for(let i=0;i<arr.length;i++){
  for(let k=0;k<i;k++){
    if(arr[i]===arr[k]){
      arr.splice(i, 1);
      i--;
    }
  }
}
console.log(arr)
```

## 向后循环比较

```js
for(let i=0;i<arr.length;i++){
  for(let k=i+1;k<arr.length;k++){
    if(arr[i]===arr[k]){
      arr.splice(i, 1);
      i--;
    }
  }
}
console.log(arr)
```

## 不修改原数组

```js
let rs=[];
for(let i=0;i<arr.length;i++){
  for(let k=i+1;k<arr.length;k++){
    if(arr[i]===arr[k]){
      //跳过
      k=++i;
    }
  }
  rs.push(arr[i]);
}
console.log(rs);
```

## 跟结果集比较

```js
let rs=[];
for(let i=0;i<arr.length;i++){
  if(rs.indexOf(arr[i])===-1){
    rs.push(arr[i]);
  }
}
console.log(rs);
```

## 使用filter方法

```js
console.log(
    arr.filter((item,index)=>{
      return arr.indexOf(item)===index;
    })
)
```

## 使用对象

```js
let tag={};
let rs=[];
for(let i=0;i<arr.length;i++){
  if(!tag[arr[i]]){
    rs.push(arr[i]);
    tag[arr[i]]=true;
  }
}
console.log(rs)
```

## ES6方法

```js
let rs=Array.from(new Set(arr))
console.log(rs)
```

## 最精简方法

```js
console.log([...new Set(arr)])
```

