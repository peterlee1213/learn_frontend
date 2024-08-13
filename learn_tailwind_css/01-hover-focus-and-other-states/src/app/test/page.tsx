
export default function () {
    const arr = [
        "abc",
        "def", "ghi"
    ];
    return (
        <div>
            <h1 className="text-2xl">hover改变背景颜色</h1>
            <button className="bg-sky-500 hover:bg-sky-700">Hover改变背景颜色</button>
            <h1 className="text-2xl">focus改变背景颜色</h1>
            <input type="text" placeholder="focus改变背景颜色" className="bg-sky-500 focus:bg-slate-700" />
            <h1 className="text-2xl">条件可以叠加 大于md的宽度下hover改变背景颜色</h1>
            <div className="w-64 h-64 bg-orange-400 md:hover:bg-orange-700"></div>
            <p>=========================================================================</p>
            <h1 className="text-2xl">First和Last</h1>
            <ul>
                {arr.map(item => (
                    <li key={item} className="first:bg-green-300 last:bg-red-300">{item}</li>
                ))}
            </ul>
            <h1 className="text-2xl">Odd和Even，元素索引（从1开始）是单数和双数所各自应用的样式</h1>
            <ul>
                {arr.map(item => (
                    <li key={item} className="odd:bg-yellow-300 even:bg-blue-300">{item}</li>
                ))}
            </ul>
            <p>=========================================================================</p>
            <h1 className="text-2xl">Form状态，required/invalid/disabled</h1>
            <form action="">
                <input type="text" value={"abc"} disabled placeholder="disabled" className="disabled:bg-blue-500 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                <br></br>
                <input type="text" required placeholder="required" className="disabled:bg-blue-500 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:bg-pink-500 invalid:text-pink-600
      focus:invalid:border-blue-500 focus:invalid:ring-pink-500" />
                <br></br>
                <input type="text" value="read-only" readOnly className="read-only:bg-yellow-400" /><br />
                <br />
                <button type="submit">submit</button>
            </form>
            <p>=========================================================================</p>
            <h1 className="text-2xl">基于父元素的子元素状态变化</h1>
            <p>比如移动或聚焦或active到父元素上，其下子元素发生响应的状态变化</p>
            <div className="group">
                测试group-hover，移动到这里子元素会发生样式变化
                <div className="group-hover:bg-red-600">变红</div>
                <div className="group-hover:bg-green-600">变绿</div>
                <div className="group-hover:bg-blue-600">变蓝</div>
            </div>
            <div className="group">
                测试group-active,点击这里子元素会发生样式变化
                <div className="group-active:bg-red-600">变红</div>
                <div className="group-active:bg-green-600">变绿</div>
                <div className="group-active:bg-blue-600">变蓝</div>
            </div>
            <p>有多个group互相交叉嵌套时可以取名字</p>
            <div className="group/parent">
                测试group/parent-hover,鼠标移动到这里对应子元素会发生样式变化
                <div className="group-hover/parent:bg-red-600">变红</div>
                <div className="group/child">
                    测试group/child-hover,hover这里子元素会发生样式变化
                    <div className="group-hover/parent:bg-green-600">变绿</div>
                    <div className="group-hover/child:bg-blue-600">变蓝</div>
                </div>
            </div>
            <p>=========================================================================</p>
            <h1 className="text-2xl">根据上一个sibling元素的状态决定当前元素的状态</h1>
            <p>测试peer-invalid,字段验证不通过时展示信息</p>
            <form action="" method="post">
                <input placeholder="email" type="email" name="email" id="" className="peer" required />
                {/* 只要上面字段没填或者不符合email格式下面的字段就会展示 */}
                <p className="peer-invalid:visible invisible">invalid email</p>
                <input type="submit" value="submit" />
            </form>
            <p>测试peer-required,字段required时展示信息</p>
            <form action="" method="get">
                <input placeholder="email" type="email" name="email" id="" className="peer" required />
                {/* 只要上面字段有required属性下面的字段就会展示，即使用户填写了一会一直展示 */}
                <p className="peer-required:visible invisible">required field</p>
                <input type="submit" value="submit" />
            </form>
            <p>同理还有peer-disabled和peer-focus</p>
            <p>=========================================================================</p>
            <h1 className="text-2xl">类似于命名group,peer也有命名peer以区分不同的peer</h1>
            <form>
                <legend>Published status</legend>

                <input id="draft" className="peer/draft" type="radio" name="status" checked />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

                <input id="published" className="peer/published" type="radio" name="status" />
                <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>

                <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
            </form>
            <p>=========================================================================</p>
            <h1 className="text-2xl">为所有直接子元素应用相同的样式</h1>
            <ul className="*:bg-red-500">
                {/* 注意：这种情况下子元素单独应用样式就没用了 */}
                <li className="bg-blue-600">abc</li>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
            </ul>
            <p>=========================================================================</p>
            <h1 className="text-2xl">选择placeholder样式</h1>
            <input type="text" placeholder="placeholder" className="placeholder:italic placeholder:text-slate-400" />
            <p>=========================================================================</p>
            <h1 className="text-2xl">文字选中的样式</h1>
            <p className="selection:text-red-500 selection:bg-blue-300">weghweiughwuegweuihgweiuefgh</p>

        </div>
    );
}