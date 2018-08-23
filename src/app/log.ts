import { PartialObserver } from "rxjs";

export let observer = {
    next : (v : any) => {
        console.log('next', v);
    },
    error : (e : any) => {
        console.log('error', e);
    },
    complete : () => {
        console.timeEnd();
        console.log('complete');
    }
}
