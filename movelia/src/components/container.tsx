import {CustomComponentsProps} from "../interface";
import {mergeClassName} from "../utils";

export const Container = (props: CustomComponentsProps) => {
    return (
        <div className={mergeClassName('px-6 py-1.5 max-w-screen-lg mx-auto', props.className)}>
            {props.children}
        </div>
    )
}