import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';


export default function () {
    return (
        <div>
            <div className="text-4xl">one-off customization</div>
            <Divider></Divider>
            <div className='text-xl'>每个组件都有sx属性，可调整组件的样式</div>
            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'error.main',
                }}
            />
            <div className='text-xl'>还可以调整子组件的样式</div>
            <Slider defaultValue={30} sx={{
                width: 300,
                color: 'warning.main',
                // 需要注意：不加&符号的花所有MuiSlider-thumb类都会应用这个样式，加了这个符号就表示此样式仅应用于当前组件，防止样式污染
                '& .MuiSlider-thumb': {
                    borderRadius: '1px'
                }
            }} />
            <div className='text-xl'>还可以在css文件中通过类名调整组件样式，这里不演示了</div>
        </div>
    );
}