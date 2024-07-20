+ `use server`
  + 用在组件上作为服务器组件
  + 用在方法上作为server action,此时有部分代码被传送到客户端，server component和client component都可以调用
+ `import "server-only"`
  + 用在方法上可保证方法只能在server component调用, 一点代码也不能传到客户端
  + `npm install server-only`来俺扎u那个
  + 与`server-only`相反，