import clsx from 'clsx'

const dots = 'mx-[2px] inline-block h-6 w-6 animate-blink rounded-xl'

const LoadingDots = ({className = ''}: {className?: string}) => {
    return (
        <span className='mx-2 inline-flex items-center'>
            <span className={clsx(dots, className)} />
            <span className={clsx(dots, 'animation-delay-[200ms]', className)}/>
            <span className={clsx(dots, 'animation-delay-[400ms]', className)}/>
        </span>
    )
}

export default LoadingDots;