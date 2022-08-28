## 项目启动

```sh
pnpm install
pnpm run dev
```

### mysql 常用语句

#### 查询
```mysql
-- 查询所有 
SELECT * FORM user

-- 查询指定列 
SELECT * name age FORM user
```

#### 增加
```mysql
-- 第一种方式 ( 指定默认值 )
INSERT INTO user (name,age) values ('张三',18)
    
-- 第二种方式 ( 不指定默认值 )
INSERT INTO user(name,age) values(?,?) 
```

#### 更新
```mysql
-- 更新一个
UPDATE user SET name = '测试' WHERE id=4

-- 更新多个 
UPDATE user SET name='测试',age='18' WHERE id=4

```

#### 删除
```mysql
DELETE FROM user where id = 1
```


