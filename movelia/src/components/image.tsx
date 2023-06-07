import {CustomComponentsProps} from "../interface";
import {mergeClassName} from "../utils";

interface Props extends CustomComponentsProps {
    src?: string

}
export const Image = (props: Props) => {
    return (
        <div className={mergeClassName('bg-primary h-full w-full', props.className)}>
            <img src={props.src} className="w-full h-full" alt="" ></img>
        </div>
    )
}