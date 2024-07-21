"use server"

export default async function () {

    /**
     * 浏览器输出结果为root,没有问题
     * 
     * 可能问题： 为什么我可将非NEXT_PUBLIC_开头的变量值返回给客户端
     * 答：这段代码在NODE服务端执行的，所以能拿到值，拿到值后返回给客户端，这也没问题
     */
    /**
     * 这就是为什么涉及到敏感数据的操作方法都要加`import "server-only"`
     * 这样可以确保只要我不直接return密码这类敏感数据出去，敏感数据就永远出不去
     * use server代码可直接与客户端或者客户端组件交互，但server-only不能
     * use server可通过返回值将结果交给客户端组件，server-only不能
     * 
     * 当然我可以在在server-only中将USER返回给server component,然后在server component中返回给客户端，但是一般不这么做
     */
    return process.env.USER
}