## 项目启动

```sh
pnpm install
pnpm run dev
```

### mysql 常用语句

```mysql

//访问整个表的信息
select  * from goods

//带查询条件访问表
select * from goods where name = '${name}'

//添加记录
insert into userinfo values('${****}','${***}','${***}')`

//删除整个表的数据
delete from goods

//带条件删除
delete from goods where id=4

//修改语句
update 表名 set 字段名=‘新内容’ + where条件


```
