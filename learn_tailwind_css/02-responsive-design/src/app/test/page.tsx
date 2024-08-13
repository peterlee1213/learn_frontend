export default function () {
    return (
        <div>
            <div className="text-4xl">responsive 设计（根据浏览器宽度动态调整样式）一般用法</div>
            <div>
                <div className="md:flex">
                    <div>md及以上宽度才会横排展示</div>|
                    <div>md以下宽度竖排展示</div>
                </div>
            </div>
            <div className="text-gray-400">tailwindcss是mobile样式优先的，就是说如果有text-center sm:text-left，这就意味着在sm以下是text-center,sm以上是text-left</div>
            <div className="text-gray-400">就是说应当先写mobile页面，然后写sm,然后md,以此类推</div>
            <div className="text-4xl">指定样式应用于特定宽度范围</div>
            <div>
                <div>下面的这个方框仅在sm-xl这个宽度范围内可见</div>
                <div className="invisible sm:max-xl:visible w-32 h-32 bg-green-400"></div>
                <div>contextb</div>
            </div>
            <div className="text-4xl">自定义宽度断点</div>
            <div className="text-gray-400">具体参照tailwind.config.ts</div>
        </div>
    );
}