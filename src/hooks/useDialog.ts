import { ref } from '@vue/composition-api';

export function useDealDialog(clearFxns: Array<Function>) {
    let dialog = ref(false);
    function clearInputsAndState() {
        clearFxns.forEach((fxn: Function) => fxn());
    }
    function closeDialog() {
        dialog.value = false;
    }
    function submitDialog() {
        closeDialog();
        //TODO add post request
        // clearInputsAndState();
    }
    function cancelDialog() {
        closeDialog();
        clearInputsAndState();
    }
    return { dialog, cancelDialog, submitDialog };
}
